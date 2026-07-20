import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { RidesModule } from './rides/rides.module';
import { PaymentsModule } from './payments/payments.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { AdminModule } from './admin/admin.module';
import { SavedPlacesModule } from './saved-places/saved-places.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [AuthModule, UsersModule, DriversModule, VehiclesModule, RidesModule, PaymentsModule, SubscriptionsModule, AdminModule, SavedPlacesModule, NotificationsModule],
})
export class AppModule {}
