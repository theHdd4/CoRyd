import { NextResponse } from 'next/server';
import { getCustomerDashboardData } from '../../../(customer)/dashboard/data';

export async function GET() {
  const dashboard = await getCustomerDashboardData();
  return NextResponse.json(dashboard);
}
