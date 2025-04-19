    import {
        Home,
        ShoppingCart,
        Users,
        Percent,
        ListOrdered,
        CreditCard,
        Star,
        PlusCircle,
        Image,
        List,
        MessageSquare,
        Shield,
        UserCog,
        Store
    } from 'lucide-react';
    
    const Sidebar = () => {
        return (
        <aside className="w-64 min-h-screen bg-white px-4 py-6 shadow-sm font-lato">
            <div className="mb-6 px-2">
            <h1 className="text-xl font-bold text-blue-600 tracking-wide">DEALP🛒RT</h1>
            </div>
    
            <div className="space-y-4">
            <div>
                <h2 className="text-xs uppercase text-gray-400 font-semibold mb-2">Main menu</h2>
                <nav className="space-y-1">
                <SidebarLink icon={<Home size={16} />} label="Dashboard" active />
                <SidebarLink icon={<ShoppingCart size={16} />} label="Order Management" />
                <SidebarLink icon={<Users size={16} />} label="Customers" />
                <SidebarLink icon={<Percent size={16} />} label="Coupon Code" />
                <SidebarLink icon={<ListOrdered size={16} />} label="Categories" />
                <SidebarLink icon={<CreditCard size={16} />} label="Transaction" />
                <SidebarLink icon={<Star size={16} />} label="Brand" />
                </nav>
            </div>
    
            <div>
                <h2 className="text-xs uppercase text-gray-400 font-semibold mb-2">Product</h2>
                <nav className="space-y-1">
                <SidebarLink icon={<PlusCircle size={16} />} label="Add Products" />
                <SidebarLink icon={<Image size={16} />} label="Product Media" />
                <SidebarLink icon={<List size={16} />} label="Product List" />
                <SidebarLink icon={<MessageSquare size={16} />} label="Product Reviews" />
                </nav>
            </div>
    
            <div>
                <h2 className="text-xs uppercase text-gray-400 font-semibold mb-2">Admin</h2>
                <nav className="space-y-1">
                <SidebarLink icon={<UserCog size={16} />} label="Admin role" />
                <SidebarLink icon={<Shield size={16} />} label="Control Authority" />
                </nav>
            </div>
            </div>
    
            <div className="mt-6 pt-4">
            <div className="flex items-center gap-3 px-2">
                <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Profile"
                className="w-10 h-10 rounded-full"
                />
                <div>
                <p className="text-sm font-semibold">Malsky</p>
                <p className="text-xs text-gray-500">Malsky@matrixsync</p>
                </div>
            </div>
            <button className="mt-4 w-full flex items-center gap-2 px-2 py-2 text-sm font-medium border border-blue-100 rounded-lg shadow hover:bg-blue-50 transition">
                <Store size={16} />
                Your Shop
            </button>
            </div>
        </aside>
        );
    };
    
    const SidebarLink = ({ icon, label, active }) => {
        return (
        <a
            href="#"
            className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium transition ${
            active
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            {icon}
            {label}
        </a>
        );
    };
    
    export default Sidebar;
    