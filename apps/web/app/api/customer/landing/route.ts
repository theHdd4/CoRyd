import { NextResponse } from 'next/server';
import { getCustomerLandingData } from '../../../(customer)/landing/data';

export async function GET() {
  const landing = await getCustomerLandingData();
  return NextResponse.json(landing);
}
