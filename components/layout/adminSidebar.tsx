"use client"
import { AdminData } from '@/data'
import { useAdminContext } from '@/hooks/useAdminContext';
import { CircleChevronLeft, CircleChevronRight, } from 'lucide-react';
import IconComponent from '../shared/IconComponent';

export default function AdminSidebar() {
    const { adminNavLink, setAdminNavLink, openAdminSidebar, setOpenAdminSidebar } = useAdminContext();

    return (
        <aside
            aria-label='admin-sidebar'
            className={`transition-all duration-300 ${openAdminSidebar ? "w-[100px]!" : ""} h-full w-full max-w-[300px] bg-indigo-100 rounded-4xl p-4 relative max-lg:fixed top-0 bottom-0 left-0 max-lg:shadow-md`}>

            <button
                onClick={() => setOpenAdminSidebar(prev => !prev)}
                className='absolute -right-2 top-10 bg-white hover:bg-indigo-100 scale-95 hover:scale-100 hover:animate-pulse transition-colors duration-75 rounded-full cursor-pointer'
            >
                {openAdminSidebar ?
                    <IconComponent iconName={CircleChevronRight} />
                    :
                    <IconComponent iconName={CircleChevronLeft} />
                }

            </button>

            <h1 className="text-[clamp(1.25rem,5vw,1.875rem)] font-semibold text-center font-satoshi">
                {/* Tahir Rafique */}
                xyz
            </h1>
            <div className='flex flex-col gap-5 justify-between h-full max-h-[calc(100%-70px)]'>
                <ul className='space-y-2 py-8'>
                    {
                        AdminData.adminSidebarLinks.map((navlink) => {
                            return (
                                <li
                                    key={navlink.id}
                                    className={`text-xl font-inter leading-[140%] rounded-primary p-2 flex items-center gap-3 cursor-pointer transition-all duration-75 ${adminNavLink === navlink.label ? "bg-indigo-200 font-medium" : "hover:bg-indigo-200"}  ${openAdminSidebar ? " justify-center w-full min-w-[50px] min-h-[50px]" : ""} `}
                                    onClick={() => setAdminNavLink(navlink.label)}
                                >
                                    <IconComponent iconName={navlink.icon} className={`size-6`} />
                                    <span className={` ${openAdminSidebar ? " hidden" : ""} `}>{navlink.label}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <p className='text-center text-[clamp(0.1rem,2vw,0.9rem)] font-satoshi font-medium'>Created by @Tahir!</p>
            </div>
        </aside >
    )
}