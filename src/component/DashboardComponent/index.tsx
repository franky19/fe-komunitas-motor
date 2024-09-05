import ThemeToggle from "../themes/ToogleThemes";

const DashboardMainContent = () => {
    return (
      <div className="main-content p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard! Customize your experience below:</p>
  
        {/* Include the ThemeToggle component */}
        <ThemeToggle />
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="widget bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Website Traffic</h2>
            <p>Statistics and insights...</p>
          </div>
          <div className="widget bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <p>View and manage recent orders...</p>
          </div>
          <div className="widget bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">New Users</h2>
            <p>Recently registered users...</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardMainContent;
  