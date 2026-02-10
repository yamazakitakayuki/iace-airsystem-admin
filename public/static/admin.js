// ============================================
// Admin Session State
// ============================================

let adminSession = {
  isAuthenticated: false,
  email: null,
  loginTime: null
};

// Demo admin credentials
const DEMO_ADMIN = {
  email: 'admin@example.com',
  password: 'admin123'
};

// ============================================
// Mock Data
// ============================================

const mockBookings = [
  {
    id: 'BK2026021001',
    userId: 'user_001',
    userName: '山田 太郎',
    userEmail: 'yamada@example.com',
    bookingDate: '2026-02-10',
    status: 'confirmed',
    flight: {
      outbound: { from: '東京 (NRT)', to: 'ニューヨーク (JFK)', date: '2026-03-15', flightNumber: 'AA101' },
      return: { from: 'ニューヨーク (JFK)', to: '東京 (NRT)', date: '2026-03-22', flightNumber: 'AA102' }
    },
    pricing: { total: 355000 }
  },
  {
    id: 'BK2026020902',
    userId: 'user_002',
    userName: '佐藤 花子',
    userEmail: 'sato@example.com',
    bookingDate: '2026-02-09',
    status: 'confirmed',
    flight: {
      outbound: { from: '東京 (HND)', to: 'ロサンゼルス (LAX)', date: '2026-04-10', flightNumber: 'NH009' },
      return: { from: 'ロサンゼルス (LAX)', to: '東京 (HND)', date: '2026-04-20', flightNumber: 'NH010' }
    },
    pricing: { total: 192000 }
  },
  {
    id: 'BK2026020803',
    userId: 'user_003',
    userName: '鈴木 次郎',
    userEmail: 'suzuki@example.com',
    bookingDate: '2026-02-08',
    status: 'confirmed',
    flight: {
      outbound: { from: '大阪 (KIX)', to: 'サンフランシスコ (SFO)', date: '2026-05-01', flightNumber: 'JL002' },
      return: { from: 'サンフランシスコ (SFO)', to: '大阪 (KIX)', date: '2026-05-10', flightNumber: 'JL003' }
    },
    pricing: { total: 280000 }
  },
  {
    id: 'BK2026020704',
    userId: 'user_001',
    userName: '山田 太郎',
    userEmail: 'yamada@example.com',
    bookingDate: '2026-02-07',
    status: 'confirmed',
    flight: {
      outbound: { from: '東京 (NRT)', to: 'ロンドン (LHR)', date: '2026-06-15', flightNumber: 'BA005' },
      return: { from: 'ロンドン (LHR)', to: '東京 (NRT)', date: '2026-06-25', flightNumber: 'BA006' }
    },
    pricing: { total: 420000 }
  },
  {
    id: 'BK2026020605',
    userId: 'user_004',
    userName: '田中 美咲',
    userEmail: 'tanaka@example.com',
    bookingDate: '2026-02-06',
    status: 'confirmed',
    flight: {
      outbound: { from: '東京 (HND)', to: 'シンガポール (SIN)', date: '2026-03-20', flightNumber: 'SQ011' },
      return: { from: 'シンガポール (SIN)', to: '東京 (HND)', date: '2026-03-27', flightNumber: 'SQ012' }
    },
    pricing: { total: 150000 }
  }
];

// ============================================
// Authentication Functions
// ============================================

// Handle login form submit
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleLogin();
    });
  }
});

// Handle login
function handleLogin() {
  const email = document.getElementById('adminEmail').value.trim();
  const password = document.getElementById('adminPassword').value;
  
  console.log('Login attempt:', email);
  
  // Validate credentials
  if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
    // Set session
    adminSession.isAuthenticated = true;
    adminSession.email = email;
    adminSession.loginTime = new Date();
    
    console.log('Login successful');
    
    // Hide login page and show dashboard
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    
    // Update admin email display
    document.getElementById('adminUserEmail').textContent = email;
    
    // Load dashboard data
    loadDashboardData();
    
  } else {
    alert('メールアドレスまたはパスワードが正しくありません。');
  }
}

// Handle logout
function handleLogout() {
  if (confirm('ログアウトしてもよろしいですか？')) {
    adminSession = {
      isAuthenticated: false,
      email: null,
      loginTime: null
    };
    
    // Hide dashboard and show login page
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    
    // Reset form
    document.getElementById('adminEmail').value = '';
    document.getElementById('adminPassword').value = '';
    
    console.log('Logged out');
  }
}

// ============================================
// Navigation Functions
// ============================================

function showPage(pageName) {
  console.log('Showing page:', pageName);
  
  // Hide all pages
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(page => page.classList.add('hidden'));
  
  // Show selected page
  const targetPage = document.getElementById(pageName + 'Page');
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }
  
  // Update nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active', 'bg-gray-700');
    } else {
      link.classList.remove('active', 'bg-gray-700');
    }
  });
  
  // Load page-specific data
  if (pageName === 'dashboard') {
    loadDashboardData();
  }
}

// ============================================
// Dashboard Functions
// ============================================

function loadDashboardData() {
  console.log('Loading dashboard data');
  
  // Calculate statistics
  const today = new Date().toISOString().split('T')[0];
  const currentMonth = today.substring(0, 7); // YYYY-MM
  
  const todayBookings = mockBookings.filter(b => b.bookingDate === today);
  const monthlyBookings = mockBookings.filter(b => b.bookingDate.startsWith(currentMonth));
  
  const todayRevenue = todayBookings.reduce((sum, b) => sum + b.pricing.total, 0);
  const monthlyRevenue = monthlyBookings.reduce((sum, b) => sum + b.pricing.total, 0);
  
  // Update stats cards
  document.getElementById('todayBookings').textContent = todayBookings.length;
  document.getElementById('todayRevenue').textContent = '¥' + todayRevenue.toLocaleString();
  document.getElementById('monthlyBookings').textContent = monthlyBookings.length;
  document.getElementById('monthlyRevenue').textContent = '¥' + monthlyRevenue.toLocaleString();
  
  // Load recent bookings table
  loadRecentBookingsTable();
}

function loadRecentBookingsTable() {
  const tbody = document.getElementById('recentBookingsTable');
  if (!tbody) return;
  
  // Get 5 most recent bookings
  const recentBookings = mockBookings.slice(0, 5);
  
  if (recentBookings.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-8 text-gray-500">
          予約データがありません
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = recentBookings.map(booking => `
    <tr class="border-b border-gray-100 hover:bg-gray-50">
      <td class="py-3 px-4 text-sm">
        <span class="font-mono font-semibold text-blue-600">${booking.id}</span>
      </td>
      <td class="py-3 px-4 text-sm">
        <div>
          <p class="font-semibold text-gray-800">${booking.userName}</p>
          <p class="text-xs text-gray-500">${booking.userEmail}</p>
        </div>
      </td>
      <td class="py-3 px-4 text-sm">
        <div>
          <p class="text-gray-800">${booking.flight.outbound.from} → ${booking.flight.outbound.to}</p>
          <p class="text-xs text-gray-500">${booking.flight.outbound.date}</p>
        </div>
      </td>
      <td class="py-3 px-4 text-sm text-gray-600">
        ${booking.bookingDate}
      </td>
      <td class="py-3 px-4 text-sm text-right">
        <span class="font-bold text-gray-800">¥${booking.pricing.total.toLocaleString()}</span>
      </td>
    </tr>
  `).join('');
}

// ============================================
// Utility Functions
// ============================================

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// Format currency
function formatCurrency(amount) {
  return '¥' + amount.toLocaleString();
}

console.log('Admin panel loaded');
