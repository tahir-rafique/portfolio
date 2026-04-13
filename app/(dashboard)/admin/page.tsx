// "use client"
// import { useAdminContext } from '@/hooks/useAdminContext'
// import AdminDashboard from '@/components/admin/adminDashboard';
// import AdminProfile from '@/components/admin/adminProfile';

// export default function page() {

//     const { adminNavLink } = useAdminContext();

//     return (
//         <div className='h-full w-full bg-indigo-100 rounded-2xl p-5'>
//             {
//                 adminNavLink === "Dashboard" ?
//                     <AdminDashboard />
//                     :
//                     adminNavLink === "Profile" ?
//                         <AdminProfile /> :

//                         adminNavLink === "Analytics" ?
//                             <AdminProfile /> :

//                             adminNavLink === "Setting" ?
//                                 <AdminProfile /> :
//                                 null
//             }

//         </div>
//     )
// }

//  improved Logic ✅

"use client";
import { useAdminContext } from "@/hooks/useAdminContext";
import AdminDashboard from "@/components/admin/adminDashboard";
import AdminProfile from "@/components/admin/adminProfile";
import AdminAnalytics from "@/components/admin/adminAnalytics";
import AdminSettings from "@/components/admin/adminSettings";

const ADMIN_COMPONENTS: Record<string, React.ComponentType> = {
  Dashboard: AdminDashboard,
  Profile: AdminProfile,
  Analytics: AdminAnalytics,
  Setting: AdminSettings,
};

export default function Page() {
  const { adminNavLink } = useAdminContext();

  const ActiveComponent = ADMIN_COMPONENTS[adminNavLink] || AdminDashboard;

  return (
    <div className="h-full w-full bg-background rounded-secondary border border-white p-3 sm:p-4 overflow-x-auto">
      <ActiveComponent />
    </div>
  );
}
