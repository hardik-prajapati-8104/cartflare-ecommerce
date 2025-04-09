// import React from 'react';
// import Link from 'next/link';
// import { assets } from '../../assets/assets';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// const SideBar = () => {
//     const pathname = usePathname()
//     const menuItems = [
//         { name: 'Add Product', path: '/seller', icon: assets.add_icon },
//         { name: 'Product List', path: '/seller/product-list', icon: assets.product_list_icon },
//         { name: 'Orders', path: '/seller/orders', icon: assets.order_icon },
//     ];

//     return (
//         <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col'>
//             {menuItems.map((item) => {

//                 const isActive = pathname === item.path;

//                 return (
//                     <Link href={item.path} key={item.name} passHref>
//                         <div
//                             className={
//                                 `flex items-center py-3 px-4 gap-3 ${isActive
//                                     ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
//                                     : "hover:bg-gray-100/90 border-white"
//                                 }`
//                             }
//                         >
//                             <Image
//                                 src={item.icon}
//                                 alt={`${item.name.toLowerCase()}_icon`}
//                                 className="w-7 h-7"
//                             />
//                             <p className='md:block hidden text-center'>{item.name}</p>
//                         </div>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// };

// export default SideBar;
import React, { useState } from 'react';
import {
  BarChart3,
  Package,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Plus
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-4 flex items-center justify-between border-b">
          <h1 className="font-bold text-xl text-blue-600">ShopAdmin</h1>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <img src="/api/placeholder/40/40" alt="Avatar" className="rounded-full" />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-md">
              <BarChart3 className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Package className="h-5 w-5" />
              <span>Products</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <ShoppingCart className="h-5 w-5" />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Users className="h-5 w-5" />
              <span>Customers</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <CreditCard className="h-5 w-5" />
              <span>Transactions</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-1.5 relative text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden md:flex items-center gap-2">
              <img src="/api/placeholder/32/32" alt="Avatar" className="rounded-full" />
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Dashboard Overview</h2>
            <p className="text-gray-500">Welcome back, here's what's happening with your store today.</p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-500 text-sm">Total Sales</h3>
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                  <DollarSign className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">$24,780</p>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+2.5%</span>
                  </div>
                </div>
                <div className="h-12 flex items-end">
                  <div className="w-2 h-4 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-5 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-8 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-6 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-9 bg-blue-500 rounded-full mr-1"></div>
                  <div className="w-2 h-7 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-500 text-sm">Total Orders</h3>
                <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full">
                  <ShoppingCart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">1,243</p>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+5.3%</span>
                  </div>
                </div>
                <div className="h-12 flex items-end">
                  <div className="w-2 h-6 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-8 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-4 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-7 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-9 bg-blue-500 rounded-full mr-1"></div>
                  <div className="w-2 h-5 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-11 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-500 text-sm">Customers</h3>
                <div className="bg-purple-100 text-purple-600 p-1.5 rounded-full">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">845</p>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+1.2%</span>
                  </div>
                </div>
                <div className="h-12 flex items-end">
                  <div className="w-2 h-5 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-7 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-9 bg-purple-500 rounded-full mr-1"></div>
                  <div className="w-2 h-4 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-6 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-8 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-500 text-sm">Refunds</h3>
                <div className="bg-red-100 text-red-600 p-1.5 rounded-full">
                  <CreditCard className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">$1,180</p>
                  <div className="flex items-center text-xs text-red-600">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    <span>-0.5%</span>
                  </div>
                </div>
                <div className="h-12 flex items-end">
                  <div className="w-2 h-3 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-5 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-7 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-4 bg-red-500 rounded-full mr-1"></div>
                  <div className="w-2 h-6 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full mr-1"></div>
                  <div className="w-2 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent orders */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-medium">Recent Orders</h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: '#ORD-71234', customer: 'Alex Johnson', status: 'Delivered', date: 'Mar 30, 2025', total: '$129.99' },
                      { id: '#ORD-71233', customer: 'Sarah Wilson', status: 'Processing', date: 'Mar 30, 2025', total: '$79.99' },
                      { id: '#ORD-71232', customer: 'Michael Brown', status: 'Shipped', date: 'Mar 29, 2025', total: '$189.99' },
                      { id: '#ORD-71231', customer: 'Emily Davis', status: 'Completed', date: 'Mar 29, 2025', total: '$59.99' },
                      { id: '#ORD-71230', customer: 'James Miller', status: 'Refunded', date: 'Mar 28, 2025', total: '$149.99' }
                    ].map((order, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === 'Delivered' || order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent activity and inventory stats */}
            <div className="space-y-6">
              {/* Recent activity */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Recent Activity</h3>
                  <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Users, color: 'bg-blue-100 text-blue-600', text: 'New customer registered', time: '5 min ago' },
                    { icon: ShoppingCart, color: 'bg-green-100 text-green-600', text: 'New order placed #ORD-71234', time: '15 min ago' },
                    { icon: CreditCard, color: 'bg-red-100 text-red-600', text: 'Refund processed #ORD-71230', time: '1 hour ago' },
                    { icon: Package, color: 'bg-purple-100 text-purple-600', text: 'Product stock low: ID-5521', time: '2 hours ago' }
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`${activity.color} p-1.5 rounded-full mr-3`}>
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Inventory stats */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Inventory Status</h3>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Manage</a>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Electronics</span>
                      <span className="text-gray-500">75% in stock</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 rounded-full h-2" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Clothing</span>
                      <span className="text-gray-500">92% in stock</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 rounded-full h-2" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accessories</span>
                      <span className="text-gray-500">35% in stock</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 rounded-full h-2" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Home Goods</span>
                      <span className="text-gray-500">60% in stock</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 rounded-full h-2" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick actions */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-lg transition-colors">
                    <Plus className="h-5 w-5 mb-1" />
                    <span className="text-xs">Add Product</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 text-green-600 p-3 rounded-lg transition-colors">
                    <ShoppingCart className="h-5 w-5 mb-1" />
                    <span className="text-xs">New Order</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-purple-50 hover:bg-purple-100 text-purple-600 p-3 rounded-lg transition-colors">
                    <Users className="h-5 w-5 mb-1" />
                    <span className="text-xs">Add User</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-orange-50 hover:bg-orange-100 text-orange-600 p-3 rounded-lg transition-colors">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-xs">Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;