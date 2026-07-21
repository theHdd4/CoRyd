CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE user_role AS ENUM ('Customer', 'Driver', 'Admin');
CREATE TYPE user_status AS ENUM ('Active', 'Inactive', 'Suspended');
CREATE TYPE approval_status AS ENUM ('Pending', 'Approved', 'Rejected');
CREATE TYPE online_status AS ENUM ('Offline', 'Online');
CREATE TYPE vehicle_type AS ENUM ('Bike', 'Taxi');
CREATE TYPE vehicle_status AS ENUM ('Active', 'Inactive', 'Maintenance');
CREATE TYPE ride_status AS ENUM ('Requested', 'Accepted', 'Started', 'Completed', 'Cancelled');
CREATE TYPE payment_status AS ENUM ('Pending', 'Succeeded', 'Failed', 'Refunded');
CREATE TYPE subscription_status AS ENUM ('Active', 'Expired', 'Cancelled');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'Customer',
  status user_status NOT NULL DEFAULT 'Active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE drivers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  license_number VARCHAR(80) UNIQUE NOT NULL,
  bank_account VARCHAR(120) NOT NULL,
  rating NUMERIC(3,2) NOT NULL DEFAULT 5.00,
  online_status online_status NOT NULL DEFAULT 'Offline',
  approval_status approval_status NOT NULL DEFAULT 'Pending'
);

CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  driver_id UUID NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  vehicle_type vehicle_type NOT NULL,
  registration_number VARCHAR(40) UNIQUE NOT NULL,
  model VARCHAR(80) NOT NULL,
  color VARCHAR(40) NOT NULL,
  status vehicle_status NOT NULL DEFAULT 'Active'
);

CREATE TABLE rides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID NOT NULL REFERENCES users(id),
  driver_id UUID REFERENCES drivers(id),
  pickup_address TEXT NOT NULL,
  drop_address TEXT NOT NULL,
  pickup_lat NUMERIC(10,7) NOT NULL,
  pickup_lng NUMERIC(10,7) NOT NULL,
  drop_lat NUMERIC(10,7) NOT NULL,
  drop_lng NUMERIC(10,7) NOT NULL,
  vehicle_type vehicle_type NOT NULL,
  fare NUMERIC(10,2) NOT NULL,
  distance NUMERIC(8,2) NOT NULL,
  ride_status ride_status NOT NULL DEFAULT 'Requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ride_id UUID UNIQUE NOT NULL REFERENCES rides(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  payment_method VARCHAR(40) NOT NULL,
  payment_status payment_status NOT NULL DEFAULT 'Pending',
  transaction_id VARCHAR(120)
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_name VARCHAR(80) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status subscription_status NOT NULL DEFAULT 'Active'
);

CREATE TABLE saved_places (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(80) NOT NULL,
  address TEXT NOT NULL,
  latitude NUMERIC(10,7) NOT NULL,
  longitude NUMERIC(10,7) NOT NULL
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(120) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
