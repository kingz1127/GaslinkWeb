import { cookies } from 'next/headers'

export function getAdminToken() {
  return cookies().get('admin_token')?.value
}
