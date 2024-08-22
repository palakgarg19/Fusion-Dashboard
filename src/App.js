import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-700 text-white flex flex-col">
        <div className="p-4 flex items-center space-x-3">
          <img src="/IIITDMJ.png" alt="Fusion Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold">FUSION</span>
        </div>
        <nav className="flex-1">
        <ul className="space-y-2 text-sm">
  <li>
    <a href="#" className="block py-2.5 px-4 bg-white text-black hover:bg-gray-600 hover:text-white">
      Dashboard
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/academics-icon.png" alt="Academics" className="w-5 h-5" />
      <span>Academics</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/curriculum-icon.png" alt="Programme and Curriculum" className="w-5 h-5" />
      <span>Programme and curriculum</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/mess-icon.png" alt="Mess Management" className="w-5 h-5" />
      <span>Mess Management</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/visitors-icon.png" alt="Visitor's Hostel" className="w-5 h-5" />
      <span>Visitor's Hostel</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/health-care-icon.png" alt="Healthcare Center" className="w-5 h-5" />
      <span>Healthcare center</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/scholarship-icon.png" alt="Scholarship Portal" className="w-5 h-5" />
      <span>Scholarship portal</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/complaint-icon.png" alt="Complaint System" className="w-5 h-5" />
      <span>Complaint system</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/placement-icon.png" alt="Placement Cell" className="w-5 h-5" />
      <span>Placement cell</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/department-icon.png" alt="Department Portal" className="w-5 h-5" />
      <span>Department Portal</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/gymkhana-icon.png" alt="Gymkhana" className="w-5 h-5" />
      <span>Gymkhana</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/hostel-icon.png" alt="Hostel Management" className="w-5 h-5" />
      <span>Hostel Management</span>
    </a>
  </li>
  <li>
    <a href="#" className="block py-2.5 px-4 hover:bg-gray-600 flex items-center space-x-2">
      <img src="/other-academic-icon.png" alt="Other Academic Procedure" className="w-5 h-5" />
      <span>Other Academic Procedure</span>
    </a>
  </li>
</ul>

        </nav>
        <br></br>
        
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="text-lg font-semibold">Student</div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center"
            >
              <i className="fas fa-user-circle mr-2"></i> PALAK GARG
              <i className="fas fa-caret-down ml-2"></i>
            </button>
            {isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg">
    <div className="p-4 border-t bg-gray-300 border-gray-400 rounded-lg">
      <div className="flex items-center space-x-3">
        <img src="/profile.png" alt="User Profile Picture" className="w-20 h-20 rounded-full" />
        <div>
          <h4 className="text-sm font-semibold">PALAK GARG</h4>
          <p className="text-s">22BCS178</p>
          <p className="text-s">B.Tech. (Student)</p>
          <p className="text-s">Computer Science Engineering</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <a href="#" className="px-2 py-1 text-white hover:bg-gray-200 rounded-md bg-blue-600">View Profile</a>
        <a href="#" className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded-md bg-white">Logout</a>
      </div>
    </div>
  </div>
)}

            
          </div>
        </header>

        {/* Announcements Section */}
        <section>
  <h2 className="text-xl font-semibold mb-4">Announcements</h2>
  <div className="flex overflow-x-auto space-x-4">
    <div className="min-w-[300px] bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">Prof. Atul Gupta</h3>
      <p className="text-sm text-gray-500">Posted on: Oct 15</p>
      <p className="mt-2 text-sm">New research guidelines released. Check the portal for details.</p>
    </div>
    <div className="min-w-[300px] bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">Prof. Kaushik Dutta</h3>
      <p className="text-sm text-gray-500">Posted on: Oct 20</p>
      <p className="mt-2 text-sm">Campus event postponed to next week due to weather conditions.</p>
    </div>
    {/* Add more announcements as needed */}
  </div>
</section>



        {/* Notifications Section */}
        <section>
  <h2 className="text-xl font-semibold mb-4">Notifications</h2>
  <div className="space-y-4 max-h-[400px] overflow-y-auto">
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">Course Update</h3>
        <p className="text-sm text-gray-500">Posted on: 2023-10-02</p>
        <p className="mt-2 text-sm">The syllabus for Data Structures has been updated. Please review the changes before next class.</p>
      </div>
      <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">Read</button>
    </div>
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">Exam Results</h3>
        <p className="text-sm text-gray-500">Posted on: 2023-10-01</p>
        <p className="mt-2 text-sm">Midterm exam results for Calculus are now available in your student portal.</p>
      </div>
      <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">Read</button>
    </div>
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">Library Notice</h3>
        <p className="text-sm text-gray-500">Posted on: 2023-09-30</p>
        <p className="mt-2 text-sm">The library will be closed for maintenance on 2023-10-05. Plan your visits accordingly.</p>
      </div>
      <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">Read</button>
    </div>
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">Workshop Alert</h3>
        <p className="text-sm text-gray-500">Posted on: 2023-09-28</p>
        <p className="mt-2 text-sm">A workshop on Artificial Intelligence is scheduled for 2023-10-10. Register now!</p>
      </div>
      <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">Read</button>
    </div>
    {/* Add more notifications as needed */}
  </div>
</section>

      </div>
    </div>
  );
};

export default App;