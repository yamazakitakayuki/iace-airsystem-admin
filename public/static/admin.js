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
    statusText: '予約確認済み',
    flight: {
      outbound: {
        from: '東京 (NRT)',
        to: 'ニューヨーク (JFK)',
        date: '2026-03-15',
        flightNumber: 'AA101',
        airline: 'American Airlines',
        departureTime: '10:00',
        arrivalTime: '08:30',
        duration: '13時間30分',
        seatClass: 'ビジネス',
        seat: '5A'
      },
      return: {
        from: 'ニューヨーク (JFK)',
        to: '東京 (NRT)',
        date: '2026-03-22',
        flightNumber: 'AA102',
        airline: 'American Airlines',
        departureTime: '14:00',
        arrivalTime: '17:30+1',
        duration: '14時間30分',
        seatClass: 'ビジネス',
        seat: '5B'
      }
    },
    passengers: [
      {
        lastName: '山田',
        firstName: '太郎',
        gender: '男性',
        dob: '1990-01-01',
        passport: 'AB1234567',
        nationality: '日本'
      }
    ],
    contact: {
      email: 'yamada@example.com',
      phone: '090-1234-5678'
    },
    pricing: {
      basePrice: 280000,
      seatUpgrade: 60000,
      taxFees: 15000,
      total: 355000
    }
  },
  {
    id: 'BK2026020902',
    userId: 'user_002',
    userName: '佐藤 花子',
    userEmail: 'sato@example.com',
    bookingDate: '2026-02-09',
    status: 'confirmed',
    statusText: '予約確認済み',
    flight: {
      outbound: {
        from: '東京 (HND)',
        to: 'ロサンゼルス (LAX)',
        date: '2026-04-10',
        flightNumber: 'NH009',
        airline: 'ANA',
        departureTime: '17:00',
        arrivalTime: '10:30',
        duration: '10時間30分',
        seatClass: 'プレミアムエコノミー',
        seat: '15C'
      },
      return: {
        from: 'ロサンゼルス (LAX)',
        to: '東京 (HND)',
        date: '2026-04-20',
        flightNumber: 'NH010',
        airline: 'ANA',
        departureTime: '11:00',
        arrivalTime: '14:30+1',
        duration: '12時間30分',
        seatClass: 'プレミアムエコノミー',
        seat: '15D'
      }
    },
    passengers: [
      {
        lastName: '佐藤',
        firstName: '花子',
        gender: '女性',
        dob: '1988-05-15',
        passport: 'CD9876543',
        nationality: '日本'
      }
    ],
    contact: {
      email: 'sato@example.com',
      phone: '080-9876-5432'
    },
    pricing: {
      basePrice: 150000,
      seatUpgrade: 30000,
      taxFees: 12000,
      total: 192000
    }
  },
  {
    id: 'BK2026020803',
    userId: 'user_003',
    userName: '鈴木 次郎',
    userEmail: 'suzuki@example.com',
    bookingDate: '2026-02-08',
    status: 'confirmed',
    statusText: '予約確認済み',
    flight: {
      outbound: {
        from: '大阪 (KIX)',
        to: 'サンフランシスコ (SFO)',
        date: '2026-05-01',
        flightNumber: 'JL002',
        airline: 'JAL',
        departureTime: '16:30',
        arrivalTime: '09:30',
        duration: '10時間',
        seatClass: 'エコノミー',
        seat: '28A'
      },
      return: {
        from: 'サンフランシスコ (SFO)',
        to: '大阪 (KIX)',
        date: '2026-05-10',
        flightNumber: 'JL003',
        airline: 'JAL',
        departureTime: '12:00',
        arrivalTime: '15:00+1',
        duration: '11時間',
        seatClass: 'エコノミー',
        seat: '28B'
      }
    },
    passengers: [
      {
        lastName: '鈴木',
        firstName: '次郎',
        gender: '男性',
        dob: '1992-08-20',
        passport: 'EF1122334',
        nationality: '日本'
      }
    ],
    contact: {
      email: 'suzuki@example.com',
      phone: '070-1111-2222'
    },
    pricing: {
      basePrice: 250000,
      seatUpgrade: 0,
      taxFees: 30000,
      total: 280000
    }
  },
  {
    id: 'BK2026020704',
    userId: 'user_001',
    userName: '山田 太郎',
    userEmail: 'yamada@example.com',
    bookingDate: '2026-02-07',
    status: 'confirmed',
    statusText: '予約確認済み',
    flight: {
      outbound: {
        from: '東京 (NRT)',
        to: 'ロンドン (LHR)',
        date: '2026-06-15',
        flightNumber: 'BA005',
        airline: 'British Airways',
        departureTime: '11:00',
        arrivalTime: '15:30',
        duration: '13時間30分',
        seatClass: 'エコノミー',
        seat: '32F'
      },
      return: {
        from: 'ロンドン (LHR)',
        to: '東京 (NRT)',
        date: '2026-06-25',
        flightNumber: 'BA006',
        airline: 'British Airways',
        departureTime: '13:00',
        arrivalTime: '09:30+1',
        duration: '12時間30分',
        seatClass: 'エコノミー',
        seat: '32G'
      }
    },
    passengers: [
      {
        lastName: '山田',
        firstName: '太郎',
        gender: '男性',
        dob: '1990-01-01',
        passport: 'AB1234567',
        nationality: '日本'
      }
    ],
    contact: {
      email: 'yamada@example.com',
      phone: '090-1234-5678'
    },
    pricing: {
      basePrice: 380000,
      seatUpgrade: 0,
      taxFees: 40000,
      total: 420000
    }
  },
  {
    id: 'BK2026020605',
    userId: 'user_004',
    userName: '田中 美咲',
    userEmail: 'tanaka@example.com',
    bookingDate: '2026-02-06',
    status: 'confirmed',
    statusText: '予約確認済み',
    flight: {
      outbound: {
        from: '東京 (HND)',
        to: 'シンガポール (SIN)',
        date: '2026-03-20',
        flightNumber: 'SQ011',
        airline: 'Singapore Airlines',
        departureTime: '09:00',
        arrivalTime: '15:30',
        duration: '7時間30分',
        seatClass: 'エコノミー',
        seat: '25D'
      },
      return: {
        from: 'シンガポール (SIN)',
        to: '東京 (HND)',
        date: '2026-03-27',
        flightNumber: 'SQ012',
        airline: 'Singapore Airlines',
        departureTime: '22:00',
        arrivalTime: '06:00+1',
        duration: '7時間',
        seatClass: 'エコノミー',
        seat: '25E'
      }
    },
    passengers: [
      {
        lastName: '田中',
        firstName: '美咲',
        gender: '女性',
        dob: '1995-03-10',
        passport: 'GH5544332',
        nationality: '日本'
      }
    ],
    contact: {
      email: 'tanaka@example.com',
      phone: '090-5555-6666'
    },
    pricing: {
      basePrice: 130000,
      seatUpgrade: 0,
      taxFees: 20000,
      total: 150000
    }
  }
];

// Mock user data
const mockUsers = [
  {
    id: 'user_001',
    email: 'yamada@example.com',
    lastName: '山田',
    firstName: '太郎',
    phone: '090-1234-5678',
    dob: '1990-01-01',
    gender: 'male',
    genderText: '男性',
    passport: 'AB1234567',
    nationality: '日本',
    registeredDate: '2025-12-01',
    lastLogin: '2026-02-10',
    status: 'active',
    statusText: '有効',
    bookingCount: 2
  },
  {
    id: 'user_002',
    email: 'sato@example.com',
    lastName: '佐藤',
    firstName: '花子',
    phone: '090-2345-6789',
    dob: '1988-05-15',
    gender: 'female',
    genderText: '女性',
    passport: 'CD9876543',
    nationality: '日本',
    registeredDate: '2026-01-15',
    lastLogin: '2026-02-09',
    status: 'active',
    statusText: '有効',
    bookingCount: 1
  },
  {
    id: 'user_003',
    email: 'suzuki@example.com',
    lastName: '鈴木',
    firstName: '次郎',
    phone: '090-3456-7890',
    dob: '1985-08-20',
    gender: 'male',
    genderText: '男性',
    passport: 'EF1122334',
    nationality: '日本',
    registeredDate: '2026-01-20',
    lastLogin: '2026-02-08',
    status: 'active',
    statusText: '有効',
    bookingCount: 1
  },
  {
    id: 'user_004',
    email: 'tanaka@example.com',
    lastName: '田中',
    firstName: '美咲',
    phone: '090-5555-6666',
    dob: '1995-03-10',
    gender: 'female',
    genderText: '女性',
    passport: 'GH5544332',
    nationality: '日本',
    registeredDate: '2026-02-01',
    lastLogin: '2026-02-06',
    status: 'active',
    statusText: '有効',
    bookingCount: 1
  },
  {
    id: 'user_005',
    email: 'watanabe@example.com',
    lastName: '渡辺',
    firstName: '健太',
    phone: '090-7777-8888',
    dob: '1992-11-25',
    gender: 'male',
    genderText: '男性',
    passport: 'IJ9988776',
    nationality: '日本',
    registeredDate: '2026-01-10',
    lastLogin: '2026-02-05',
    status: 'suspended',
    statusText: '停止中',
    bookingCount: 0
  }
];

// Pagination and filtering state
let currentBookingsPage = 1;
const bookingsPerPage = 10;
let filteredBookings = [...mockBookings];
let sortColumn = 'bookingDate';
let sortDirection = 'desc';
let currentBookingDetail = null;

// Users page state
let currentUsersPage = 1;
const usersPerPage = 10;
let filteredUsers = [...mockUsers];
let usersSortColumn = 'registeredDate';
let usersSortDirection = 'desc';
let currentUserDetail = null;

// Master data
const mockCities = [
  { code: 'TYO', nameJa: '東京', nameEn: 'Tokyo', country: '日本' },
  { code: 'OSA', nameJa: '大阪', nameEn: 'Osaka', country: '日本' },
  { code: 'NYC', nameJa: 'ニューヨーク', nameEn: 'New York', country: 'アメリカ' },
  { code: 'LAX', nameJa: 'ロサンゼルス', nameEn: 'Los Angeles', country: 'アメリカ' },
  { code: 'SFO', nameJa: 'サンフランシスコ', nameEn: 'San Francisco', country: 'アメリカ' },
  { code: 'CHI', nameJa: 'シカゴ', nameEn: 'Chicago', country: 'アメリカ' },
  { code: 'LON', nameJa: 'ロンドン', nameEn: 'London', country: 'イギリス' },
  { code: 'PAR', nameJa: 'パリ', nameEn: 'Paris', country: 'フランス' },
  { code: 'SEL', nameJa: 'ソウル', nameEn: 'Seoul', country: '韓国' },
  { code: 'SIN', nameJa: 'シンガポール', nameEn: 'Singapore', country: 'シンガポール' }
];

const mockAirports = [
  { code: 'NRT', nameJa: '成田国際空港', nameEn: 'Narita International Airport', cityCode: 'TYO', cityName: '東京', country: '日本' },
  { code: 'HND', nameJa: '東京国際空港（羽田）', nameEn: 'Tokyo International Airport (Haneda)', cityCode: 'TYO', cityName: '東京', country: '日本' },
  { code: 'KIX', nameJa: '関西国際空港', nameEn: 'Kansai International Airport', cityCode: 'OSA', cityName: '大阪', country: '日本' },
  { code: 'ITM', nameJa: '大阪国際空港（伊丹）', nameEn: 'Osaka International Airport (Itami)', cityCode: 'OSA', cityName: '大阪', country: '日本' },
  { code: 'JFK', nameJa: 'ジョン・F・ケネディ国際空港', nameEn: 'John F. Kennedy International Airport', cityCode: 'NYC', cityName: 'ニューヨーク', country: 'アメリカ' },
  { code: 'EWR', nameJa: 'ニューアーク・リバティー国際空港', nameEn: 'Newark Liberty International Airport', cityCode: 'NYC', cityName: 'ニューヨーク', country: 'アメリカ' },
  { code: 'LAX', nameJa: 'ロサンゼルス国際空港', nameEn: 'Los Angeles International Airport', cityCode: 'LAX', cityName: 'ロサンゼルス', country: 'アメリカ' },
  { code: 'SFO', nameJa: 'サンフランシスコ国際空港', nameEn: 'San Francisco International Airport', cityCode: 'SFO', cityName: 'サンフランシスコ', country: 'アメリカ' },
  { code: 'ORD', nameJa: 'オヘア国際空港', nameEn: "O'Hare International Airport", cityCode: 'CHI', cityName: 'シカゴ', country: 'アメリカ' },
  { code: 'LHR', nameJa: 'ロンドン・ヒースロー空港', nameEn: 'London Heathrow Airport', cityCode: 'LON', cityName: 'ロンドン', country: 'イギリス' },
  { code: 'CDG', nameJa: 'シャルル・ド・ゴール空港', nameEn: 'Charles de Gaulle Airport', cityCode: 'PAR', cityName: 'パリ', country: 'フランス' },
  { code: 'ICN', nameJa: '仁川国際空港', nameEn: 'Incheon International Airport', cityCode: 'SEL', cityName: 'ソウル', country: '韓国' },
  { code: 'SIN', nameJa: 'シンガポール・チャンギ空港', nameEn: 'Singapore Changi Airport', cityCode: 'SIN', cityName: 'シンガポール', country: 'シンガポール' }
];

const mockAirlines = [
  { code: 'NH', nameJa: '全日本空輸', nameEn: 'All Nippon Airways', country: '日本' },
  { code: 'JL', nameJa: '日本航空', nameEn: 'Japan Airlines', country: '日本' },
  { code: 'AA', nameJa: 'アメリカン航空', nameEn: 'American Airlines', country: 'アメリカ' },
  { code: 'UA', nameJa: 'ユナイテッド航空', nameEn: 'United Airlines', country: 'アメリカ' },
  { code: 'DL', nameJa: 'デルタ航空', nameEn: 'Delta Air Lines', country: 'アメリカ' },
  { code: 'BA', nameJa: 'ブリティッシュ・エアウェイズ', nameEn: 'British Airways', country: 'イギリス' },
  { code: 'AF', nameJa: 'エールフランス', nameEn: 'Air France', country: 'フランス' },
  { code: 'KE', nameJa: '大韓航空', nameEn: 'Korean Air', country: '韓国' },
  { code: 'SQ', nameJa: 'シンガポール航空', nameEn: 'Singapore Airlines', country: 'シンガポール' },
  { code: 'LH', nameJa: 'ルフトハンザドイツ航空', nameEn: 'Lufthansa', country: 'ドイツ' }
];

// Masters page state
let currentMasterTab = 'cities';
let filteredCities = [...mockCities];
let filteredAirports = [...mockAirports];
let filteredAirlines = [...mockAirlines];
let currentEditMaster = null;
let currentDeleteTarget = null;

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
  } else if (pageName === 'bookings') {
    loadBookingsPage();
  } else if (pageName === 'users') {
    loadUsersPage();
  } else if (pageName === 'masters') {
    loadMastersPage();
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

// ============================================
// Bookings Management Functions
// ============================================

// Load bookings page
function loadBookingsPage() {
  console.log('Loading bookings page');
  filteredBookings = [...mockBookings];
  currentBookingsPage = 1;
  renderBookingsTable();
}

// Filter bookings
function filterBookings() {
  const searchId = document.getElementById('searchBookingId').value.toLowerCase();
  const searchName = document.getElementById('searchUserName').value.toLowerCase();
  const searchEmail = document.getElementById('searchEmail').value.toLowerCase();
  const filterStatus = document.getElementById('filterStatus').value;
  
  filteredBookings = mockBookings.filter(booking => {
    const matchId = !searchId || booking.id.toLowerCase().includes(searchId);
    const matchName = !searchName || booking.userName.toLowerCase().includes(searchName);
    const matchEmail = !searchEmail || booking.userEmail.toLowerCase().includes(searchEmail);
    const matchStatus = !filterStatus || booking.status === filterStatus;
    
    return matchId && matchName && matchEmail && matchStatus;
  });
  
  currentBookingsPage = 1;
  renderBookingsTable();
}

// Sort bookings
function sortBookings(column) {
  if (sortColumn === column) {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    sortColumn = column;
    sortDirection = 'asc';
  }
  
  filteredBookings.sort((a, b) => {
    let aVal, bVal;
    
    switch (column) {
      case 'id':
        aVal = a.id;
        bVal = b.id;
        break;
      case 'userName':
        aVal = a.userName;
        bVal = b.userName;
        break;
      case 'route':
        aVal = a.flight.outbound.from;
        bVal = b.flight.outbound.from;
        break;
      case 'date':
        aVal = a.flight.outbound.date;
        bVal = b.flight.outbound.date;
        break;
      case 'bookingDate':
        aVal = a.bookingDate;
        bVal = b.bookingDate;
        break;
      case 'total':
        aVal = a.pricing.total;
        bVal = b.pricing.total;
        break;
      default:
        aVal = a.id;
        bVal = b.id;
    }
    
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
  
  renderBookingsTable();
}

// Render bookings table
function renderBookingsTable() {
  const tbody = document.getElementById('bookingsTableBody');
  if (!tbody) return;
  
  const start = (currentBookingsPage - 1) * bookingsPerPage;
  const end = start + bookingsPerPage;
  const pageBookings = filteredBookings.slice(start, end);
  
  if (pageBookings.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-gray-500">
          <i class="fas fa-inbox text-4xl mb-2"></i>
          <p>該当する予約がありません</p>
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = pageBookings.map(booking => {
      const statusColors = {
        confirmed: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800',
        completed: 'bg-blue-100 text-blue-800'
      };
      
      return `
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
              <p class="text-xs text-gray-500">${booking.flight.return.from} → ${booking.flight.return.to}</p>
            </div>
          </td>
          <td class="py-3 px-4 text-sm text-gray-600">
            ${booking.flight.outbound.date}
          </td>
          <td class="py-3 px-4 text-sm text-gray-600">
            ${booking.bookingDate}
          </td>
          <td class="py-3 px-4 text-sm">
            <span class="px-2 py-1 rounded-full text-xs font-semibold ${statusColors[booking.status]}">
              ${booking.statusText}
            </span>
          </td>
          <td class="py-3 px-4 text-sm text-right">
            <span class="font-bold text-gray-800">¥${booking.pricing.total.toLocaleString()}</span>
          </td>
          <td class="py-3 px-4 text-sm text-center">
            <button
              onclick="showBookingDetail('${booking.id}')"
              class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs"
            >
              <i class="fas fa-eye mr-1"></i>
              詳細
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
  
  // Update pagination
  updatePagination();
}

// Update pagination
function updatePagination() {
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
  
  document.getElementById('bookingsCount').textContent = filteredBookings.length;
  document.getElementById('currentPage').textContent = currentBookingsPage;
  document.getElementById('totalPages').textContent = totalPages || 1;
  
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  
  if (prevBtn) {
    prevBtn.disabled = currentBookingsPage === 1;
  }
  
  if (nextBtn) {
    nextBtn.disabled = currentBookingsPage >= totalPages || totalPages === 0;
  }
}

// Change page
function changePage(direction) {
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
  const newPage = currentBookingsPage + direction;
  
  if (newPage >= 1 && newPage <= totalPages) {
    currentBookingsPage = newPage;
    renderBookingsTable();
  }
}

// Show booking detail
function showBookingDetail(bookingId) {
  console.log('Showing booking detail:', bookingId);
  
  const booking = mockBookings.find(b => b.id === bookingId);
  if (!booking) {
    alert('予約情報が見つかりません。');
    return;
  }
  
  currentBookingDetail = booking;
  
  const modal = document.getElementById('bookingDetailModal');
  const content = document.getElementById('bookingDetailContent');
  const cancelBtn = document.getElementById('cancelBookingBtn');
  const editBtn = document.getElementById('editBookingBtn');
  
  if (!modal || !content) return;
  
  // Hide edit/cancel buttons if cancelled or completed
  if (cancelBtn && editBtn) {
    if (booking.status === 'cancelled' || booking.status === 'completed') {
      cancelBtn.classList.add('hidden');
      editBtn.classList.add('hidden');
    } else {
      cancelBtn.classList.remove('hidden');
      editBtn.classList.remove('hidden');
    }
  }
  
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
  };
  
  content.innerHTML = `
    <div class="space-y-6">
      <!-- Status -->
      <div class="flex justify-between items-center pb-4 border-b">
        <div>
          <h4 class="text-xl font-bold text-gray-800">予約番号: ${booking.id}</h4>
          <p class="text-sm text-gray-500">予約日: ${booking.bookingDate}</p>
        </div>
        <span class="px-4 py-2 rounded-full text-sm font-semibold ${statusColors[booking.status]}">
          ${booking.statusText}
        </span>
      </div>
      
      <!-- User Information -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-bold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-user text-blue-600 mr-2"></i>
          ユーザー情報
        </h5>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <p class="text-gray-600">氏名: ${booking.userName}</p>
          <p class="text-gray-600">メール: ${booking.userEmail}</p>
          <p class="text-gray-600">電話: ${booking.contact.phone}</p>
          <p class="text-gray-600">ユーザーID: ${booking.userId}</p>
        </div>
      </div>
      
      <!-- Flight Information -->}
      <div class="bg-blue-50 p-4 rounded-lg">
        <h5 class="font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-plane text-blue-600 mr-2"></i>
          フライト情報
        </h5>
        
        <div class="space-y-4">
          <!-- Outbound -->
          <div class="bg-white p-4 rounded-lg">
            <p class="text-sm text-gray-600 mb-2 font-semibold">
              <i class="fas fa-plane-departure text-blue-600 mr-2"></i>
              往路
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="font-semibold text-lg">${booking.flight.outbound.from} → ${booking.flight.outbound.to}</p>
                <p class="text-sm text-gray-600">${booking.flight.outbound.date}</p>
                <p class="text-sm text-gray-600">${booking.flight.outbound.departureTime} - ${booking.flight.outbound.arrivalTime}</p>
              </div>
              <div class="text-sm">
                <p class="text-gray-600">便名: <span class="font-semibold">${booking.flight.outbound.flightNumber}</span></p>
                <p class="text-gray-600">航空会社: ${booking.flight.outbound.airline}</p>
                <p class="text-gray-600">座席クラス: ${booking.flight.outbound.seatClass}</p>
                <p class="text-gray-600">座席番号: <span class="font-semibold">${booking.flight.outbound.seat}</span></p>
                <p class="text-gray-600">所要時間: ${booking.flight.outbound.duration}</p>
              </div>
            </div>
          </div>
          
          <!-- Return -->
          <div class="bg-white p-4 rounded-lg">
            <p class="text-sm text-gray-600 mb-2 font-semibold">
              <i class="fas fa-plane-arrival text-blue-600 mr-2"></i>
              復路
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="font-semibold text-lg">${booking.flight.return.from} → ${booking.flight.return.to}</p>
                <p class="text-sm text-gray-600">${booking.flight.return.date}</p>
                <p class="text-sm text-gray-600">${booking.flight.return.departureTime} - ${booking.flight.return.arrivalTime}</p>
              </div>
              <div class="text-sm">
                <p class="text-gray-600">便名: <span class="font-semibold">${booking.flight.return.flightNumber}</span></p>
                <p class="text-gray-600">航空会社: ${booking.flight.return.airline}</p>
                <p class="text-gray-600">座席クラス: ${booking.flight.return.seatClass}</p>
                <p class="text-gray-600">座席番号: <span class="font-semibold">${booking.flight.return.seat}</span></p>
                <p class="text-gray-600">所要時間: ${booking.flight.return.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Passenger Information -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-users text-blue-600 mr-2"></i>
          乗客情報
        </h5>
        ${booking.passengers.map((passenger, index) => `
          <div class="bg-white p-4 rounded-lg mb-2">
            <p class="font-semibold mb-2">乗客 ${index + 1}</p>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <p class="text-gray-600">氏名: ${passenger.lastName} ${passenger.firstName}</p>
              <p class="text-gray-600">性別: ${passenger.gender}</p>
              <p class="text-gray-600">生年月日: ${passenger.dob}</p>
              <p class="text-gray-600">国籍: ${passenger.nationality}</p>
              <p class="text-gray-600">パスポート番号: ${passenger.passport}</p>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Pricing -->
      <div class="bg-blue-50 p-4 rounded-lg">
        <h5 class="font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-credit-card text-blue-600 mr-2"></i>
          料金詳細
        </h5>
        <div class="bg-white p-4 rounded-lg space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">基本料金:</span>
            <span class="font-semibold">¥${booking.pricing.basePrice.toLocaleString()}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">座席アップグレード:</span>
            <span class="font-semibold">¥${booking.pricing.seatUpgrade.toLocaleString()}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">税金・手数料:</span>
            <span class="font-semibold">¥${booking.pricing.taxFees.toLocaleString()}</span>
          </div>
          <div class="border-t border-gray-200 pt-2 flex justify-between">
            <span class="font-bold text-lg">合計:</span>
            <span class="font-bold text-xl text-blue-600">¥${booking.pricing.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Close booking detail modal
function closeBookingDetailModal() {
  const modal = document.getElementById('bookingDetailModal');
  if (modal) modal.classList.add('hidden');
  currentBookingDetail = null;
}

// Show cancel booking confirmation
function showCancelBookingConfirm() {
  const modal = document.getElementById('cancelConfirmModal');
  if (modal) modal.classList.remove('hidden');
}

// Close cancel confirmation
function closeCancelConfirm() {
  const modal = document.getElementById('cancelConfirmModal');
  if (modal) modal.classList.add('hidden');
}

// Confirm cancel booking
function confirmCancelBooking() {
  if (!currentBookingDetail) return;
  
  console.log('Cancelling booking:', currentBookingDetail.id);
  
  // Update booking status
  const booking = mockBookings.find(b => b.id === currentBookingDetail.id);
  if (booking) {
    booking.status = 'cancelled';
    booking.statusText = 'キャンセル済み';
  }
  
  // Close modals
  closeCancelConfirm();
  closeBookingDetailModal();
  
  // Reload table
  filterBookings();
  
  alert('予約をキャンセルしました。');
}

// Show edit booking modal (placeholder)
function showEditBookingModal() {
  alert('予約編集機能は次のフェーズで実装予定です。');
}

// Export bookings to CSV
function exportBookingsCSV() {
  console.log('Exporting bookings to CSV');
  
  // CSV header
  const headers = [
    '予約番号',
    'ユーザーID',
    'ユーザー名',
    'メールアドレス',
    '電話番号',
    '予約日',
    'ステータス',
    '往路_出発地',
    '往路_目的地',
    '往路_日付',
    '往路_便名',
    '往路_航空会社',
    '往路_出発時刻',
    '往路_到着時刻',
    '往路_座席クラス',
    '往路_座席番号',
    '復路_出発地',
    '復路_目的地',
    '復路_日付',
    '復路_便名',
    '復路_航空会社',
    '復路_出発時刻',
    '復路_到着時刻',
    '復路_座席クラス',
    '復路_座席番号',
    '基本料金',
    '座席アップグレード',
    '税金・手数料',
    '合計金額'
  ];
  
  // CSV data
  const rows = filteredBookings.map(booking => [
    booking.id,
    booking.userId,
    booking.userName,
    booking.userEmail,
    booking.contact.phone,
    booking.bookingDate,
    booking.statusText,
    booking.flight.outbound.from,
    booking.flight.outbound.to,
    booking.flight.outbound.date,
    booking.flight.outbound.flightNumber,
    booking.flight.outbound.airline,
    booking.flight.outbound.departureTime,
    booking.flight.outbound.arrivalTime,
    booking.flight.outbound.seatClass,
    booking.flight.outbound.seat,
    booking.flight.return.from,
    booking.flight.return.to,
    booking.flight.return.date,
    booking.flight.return.flightNumber,
    booking.flight.return.airline,
    booking.flight.return.departureTime,
    booking.flight.return.arrivalTime,
    booking.flight.return.seatClass,
    booking.flight.return.seat,
    booking.pricing.basePrice,
    booking.pricing.seatUpgrade,
    booking.pricing.taxFees,
    booking.pricing.total
  ]);
  
  // Create CSV content
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  // Create BOM for Excel UTF-8 support
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Download
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `bookings_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log('CSV exported successfully');
}

// ============================================
// User Management Functions
// ============================================

let userFilters = {
  email: '',
  fullName: '',
  status: ''
};

let userSortColumn = '';
let userSortDirection = 'asc';
let currentUserPage = 1;

// Load users page
function loadUsersPage() {
  console.log('Loading users page');
  renderUsersTable();
}

// Search users
function searchUsers() {
  userFilters.email = document.getElementById('searchUserEmail').value.trim().toLowerCase();
  userFilters.fullName = document.getElementById('searchUserFullName').value.trim().toLowerCase();
  userFilters.status = document.getElementById('filterUserStatus').value;
  
  currentUserPage = 1;
  renderUsersTable();
}

// Reset user filters
function resetUserFilters() {
  document.getElementById('searchUserEmail').value = '';
  document.getElementById('searchUserFullName').value = '';
  document.getElementById('filterUserStatus').value = '';
  
  userFilters = {
    email: '',
    fullName: '',
    status: ''
  };
  
  currentUserPage = 1;
  renderUsersTable();
}

// Sort users
function sortUsers(column) {
  if (userSortColumn === column) {
    userSortDirection = userSortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    userSortColumn = column;
    userSortDirection = 'asc';
  }
  
  renderUsersTable();
}

// Filter and sort users
function getFilteredAndSortedUsers() {
  let filtered = mockUsers.filter(user => {
    const emailMatch = !userFilters.email || user.email.toLowerCase().includes(userFilters.email);
    const nameMatch = !userFilters.fullName || 
      (user.lastName + ' ' + user.firstName).toLowerCase().includes(userFilters.fullName) ||
      (user.lastName + user.firstName).toLowerCase().includes(userFilters.fullName);
    const statusMatch = !userFilters.status || user.status === userFilters.status;
    
    return emailMatch && nameMatch && statusMatch;
  });
  
  // Sort
  if (userSortColumn) {
    filtered.sort((a, b) => {
      let aVal, bVal;
      
      switch (userSortColumn) {
        case 'email':
          aVal = a.email;
          bVal = b.email;
          break;
        case 'name':
          aVal = a.lastName + a.firstName;
          bVal = b.lastName + b.firstName;
          break;
        case 'registeredDate':
          aVal = a.registeredDate;
          bVal = b.registeredDate;
          break;
        default:
          return 0;
      }
      
      if (userSortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }
  
  return filtered;
}

// Render users table
function renderUsersTable() {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;
  
  const users = getFilteredAndSortedUsers();
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const startIndex = (currentUserPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const pageUsers = users.slice(startIndex, endIndex);
  
  if (pageUsers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-12 text-gray-500">
          <i class="fas fa-inbox text-4xl mb-2"></i>
          <p>ユーザーが見つかりません</p>
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = pageUsers.map(user => {
      const statusClass = user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
      
      return `
        <tr class="border-b border-gray-100 hover:bg-gray-50">
          <td class="py-3 px-4 text-sm text-gray-800">${user.email}</td>
          <td class="py-3 px-4 text-sm">
            <span class="font-semibold text-gray-800">${user.lastName} ${user.firstName}</span>
          </td>
          <td class="py-3 px-4 text-sm text-gray-600">${user.phone}</td>
          <td class="py-3 px-4 text-sm text-gray-600">${user.registeredDate}</td>
          <td class="py-3 px-4 text-sm text-gray-600">${user.lastLogin}</td>
          <td class="py-3 px-4 text-sm text-center">
            <span class="font-semibold text-blue-600">${user.bookingCount}</span>
          </td>
          <td class="py-3 px-4 text-center">
            <span class="px-3 py-1 rounded-full text-xs font-semibold ${statusClass}">
              ${user.statusText}
            </span>
          </td>
          <td class="py-3 px-4 text-center">
            <button
              onclick="showUserDetail('${user.id}')"
              class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              <i class="fas fa-eye mr-1"></i>
              詳細
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
  
  // Update pagination
  document.getElementById('usersPaginationInfo').textContent = 
    `${startIndex + 1}-${Math.min(endIndex, totalUsers)} / 全 ${totalUsers} 件`;
  
  const prevBtn = document.getElementById('usersPrevPage');
  const nextBtn = document.getElementById('usersNextPage');
  
  if (prevBtn) prevBtn.disabled = currentUserPage === 1;
  if (nextBtn) nextBtn.disabled = currentUserPage === totalPages || totalPages === 0;
}

// Change users page
function changeUsersPage(direction) {
  const users = getFilteredAndSortedUsers();
  const totalPages = Math.ceil(users.length / usersPerPage);
  
  currentUserPage += direction;
  currentUserPage = Math.max(1, Math.min(currentUserPage, totalPages));
  
  renderUsersTable();
}

// Show user detail
function showUserDetail(userId) {
  console.log('Showing user detail:', userId);
  
  const user = mockUsers.find(u => u.id === userId);
  if (!user) {
    alert('ユーザー情報が見つかりません。');
    return;
  }
  
  currentUserDetail = user;
  
  // Get user's bookings
  const userBookings = mockBookings.filter(b => b.userId === userId);
  
  const modal = document.getElementById('userDetailModal');
  const content = document.getElementById('userDetailContent');
  const statusBtn = document.getElementById('toggleUserStatusBtn');
  
  if (!modal || !content) return;
  
  // Update status button
  if (statusBtn) {
    if (user.status === 'active') {
      statusBtn.innerHTML = '<i class="fas fa-ban mr-2"></i>アカウント停止';
      statusBtn.className = 'px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition';
    } else {
      statusBtn.innerHTML = '<i class="fas fa-check-circle mr-2"></i>アカウント再開';
      statusBtn.className = 'px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition';
    }
  }
  
  const statusClass = user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  
  content.innerHTML = `
    <div class="space-y-6">
      <!-- Basic Info -->}
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <h5 class="font-bold text-gray-800">基本情報</h5>
          <span class="px-3 py-1 rounded-full text-xs font-semibold ${statusClass}">
            ${user.statusText}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600">メールアドレス</p>
            <p class="font-semibold text-gray-800">${user.email}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">氏名</p>
            <p class="font-semibold text-gray-800">${user.lastName} ${user.firstName}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">電話番号</p>
            <p class="font-semibold text-gray-800">${user.phone}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">生年月日</p>
            <p class="font-semibold text-gray-800">${user.dob}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">性別</p>
            <p class="font-semibold text-gray-800">${user.genderText}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">国籍</p>
            <p class="font-semibold text-gray-800">${user.nationality}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">パスポート番号</p>
            <p class="font-semibold text-gray-800">${user.passport}</p>
          </div>
        </div>
      </div>
      
      <!-- Account Info -->}
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-bold text-gray-800 mb-4">アカウント情報</h5>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="text-sm text-gray-600">登録日</p>
            <p class="font-semibold text-gray-800">${user.registeredDate}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">最終ログイン</p>
            <p class="font-semibold text-gray-800">${user.lastLogin}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">予約数</p>
            <p class="font-semibold text-blue-600 text-lg">${user.bookingCount}</p>
          </div>
        </div>
      </div>
      
      <!-- Booking History -->}
      <div class="bg-white border border-gray-200 rounded-lg p-4">
        <h5 class="font-bold text-gray-800 mb-4">予約履歴</h5>
        ${userBookings.length === 0 ? `
          <p class="text-center text-gray-500 py-4">予約履歴がありません</p>
        ` : `
          <div class="space-y-3">
            ${userBookings.map(booking => `
              <div class="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                <div class="flex justify-between items-start mb-2">
                  <span class="font-mono font-semibold text-blue-600">${booking.id}</span>
                  <span class="px-2 py-1 rounded text-xs font-semibold ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }">
                    ${booking.statusText}
                  </span>
                </div>
                <p class="text-sm text-gray-600">${booking.flight.outbound.from} → ${booking.flight.outbound.to}</p>
                <p class="text-sm text-gray-600">${booking.flight.outbound.date}</p>
                <p class="text-sm text-gray-800 font-semibold mt-1">¥${booking.pricing.total.toLocaleString()}</p>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Close user detail modal
function closeUserDetailModal() {
  const modal = document.getElementById('userDetailModal');
  if (modal) modal.classList.add('hidden');
  currentUserDetail = null;
}

// Toggle user status
function toggleUserStatus() {
  if (!currentUserDetail) return;
  
  const newStatus = currentUserDetail.status === 'active' ? 'suspended' : 'active';
  const actionText = newStatus === 'suspended' ? 'アカウントを停止' : 'アカウントを再開';
  
  if (confirm(`${currentUserDetail.lastName} ${currentUserDetail.firstName} の${actionText}してもよろしいですか？`)) {
    // Update user status
    const user = mockUsers.find(u => u.id === currentUserDetail.id);
    if (user) {
      user.status = newStatus;
      user.statusText = newStatus === 'active' ? '有効' : '停止中';
    }
    
    // Close modal and refresh
    closeUserDetailModal();
    renderUsersTable();
    
    alert(`${actionText}しました。`);
  }
}

// Export users CSV
function exportUsersCSV() {
  console.log('Exporting users to CSV');
  
  const users = getFilteredAndSortedUsers();
  
  if (users.length === 0) {
    alert('出力するユーザーがありません。');
    return;
  }
  
  // CSV header
  const headers = [
    'ユーザーID',
    'メールアドレス',
    '姓',
    '名',
    '電話番号',
    '生年月日',
    '性別',
    'パスポート番号',
    '国籍',
    '登録日',
    '最終ログイン',
    'ステータス',
    '予約数'
  ];
  
  // CSV rows
  const rows = users.map(user => [
    user.id,
    user.email,
    user.lastName,
    user.firstName,
    user.phone,
    user.dob,
    user.genderText,
    user.passport,
    user.nationality,
    user.registeredDate,
    user.lastLogin,
    user.statusText,
    user.bookingCount
  ]);
  
  // Create CSV content
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  // Create BOM for Excel UTF-8 support
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Download
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `users_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log('Users CSV exported successfully');
}

// ============================================
// Masters Management Functions
// ============================================

function loadMastersPage() {
  console.log('Loading masters page');
  switchMasterTab(currentMasterTab);
}

function switchMasterTab(tab) {
  console.log('Switching to master tab:', tab);
  currentMasterTab = tab;
  
  // Update tab buttons
  const tabButtons = document.querySelectorAll('.master-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Show/hide master contents
  document.querySelectorAll('.master-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  if (tab === 'cities') {
    document.getElementById('citiesMaster').classList.remove('hidden');
    renderCitiesTable();
  } else if (tab === 'airports') {
    document.getElementById('airportsMaster').classList.remove('hidden');
    renderAirportsTable();
  } else if (tab === 'airlines') {
    document.getElementById('airlinesMaster').classList.remove('hidden');
    renderAirlinesTable();
  }
}

// ============================================
// Cities Master Functions
// ============================================

function filterCities() {
  const nameSearch = document.getElementById('searchCityName').value.trim().toLowerCase();
  const countrySearch = document.getElementById('searchCityCountry').value.trim().toLowerCase();
  
  filteredCities = mockCities.filter(city => {
    const matchName = !nameSearch || 
      city.nameJa.toLowerCase().includes(nameSearch) || 
      city.nameEn.toLowerCase().includes(nameSearch) ||
      city.code.toLowerCase().includes(nameSearch);
    const matchCountry = !countrySearch || city.country.toLowerCase().includes(countrySearch);
    return matchName && matchCountry;
  });
  
  renderCitiesTable();
}

function sortCities(column) {
  // Implementation similar to booking sort
  renderCitiesTable();
}

function renderCitiesTable() {
  const tbody = document.getElementById('citiesTableBody');
  
  if (filteredCities.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-gray-500">
          該当する都市が見つかりませんでした
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = filteredCities.map(city => `
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${city.code}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${city.nameJa}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${city.nameEn}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${city.country}</td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          onclick="editCity('${city.code}')"
          class="text-blue-600 hover:text-blue-900 mr-4"
        >
          <i class="fas fa-edit"></i> 編集
        </button>
        <button 
          onclick="deleteCity('${city.code}')"
          class="text-red-600 hover:text-red-900"
        >
          <i class="fas fa-trash"></i> 削除
        </button>
      </td>
    </tr>
  `).join('');
}

function showAddCityModal() {
  currentEditMaster = null;
  document.getElementById('cityModalTitle').textContent = '都市を追加';
  document.getElementById('cityCode').value = '';
  document.getElementById('cityNameJa').value = '';
  document.getElementById('cityNameEn').value = '';
  document.getElementById('cityCountry').value = '';
  document.getElementById('cityCode').disabled = false;
  document.getElementById('cityModal').classList.remove('hidden');
}

function editCity(code) {
  const city = mockCities.find(c => c.code === code);
  if (!city) return;
  
  currentEditMaster = { ...city };
  document.getElementById('cityModalTitle').textContent = '都市を編集';
  document.getElementById('cityCode').value = city.code;
  document.getElementById('cityNameJa').value = city.nameJa;
  document.getElementById('cityNameEn').value = city.nameEn;
  document.getElementById('cityCountry').value = city.country;
  document.getElementById('cityCode').disabled = true;
  document.getElementById('cityModal').classList.remove('hidden');
}

function saveCity() {
  const code = document.getElementById('cityCode').value.trim().toUpperCase();
  const nameJa = document.getElementById('cityNameJa').value.trim();
  const nameEn = document.getElementById('cityNameEn').value.trim();
  const country = document.getElementById('cityCountry').value.trim();
  
  if (!code || !nameJa || !nameEn || !country) {
    alert('すべての項目を入力してください');
    return;
  }
  
  if (currentEditMaster) {
    // Update existing
    const index = mockCities.findIndex(c => c.code === currentEditMaster.code);
    if (index !== -1) {
      mockCities[index] = { code, nameJa, nameEn, country };
    }
    alert('都市を更新しました');
  } else {
    // Add new
    if (mockCities.find(c => c.code === code)) {
      alert('この都市コードは既に存在します');
      return;
    }
    mockCities.push({ code, nameJa, nameEn, country });
    alert('都市を追加しました');
  }
  
  closeCityModal();
  filterCities();
}

function deleteCity(code) {
  currentDeleteTarget = { type: 'city', code };
  document.getElementById('deleteConfirmMessage').textContent = 
    `都市「${code}」を削除してもよろしいですか？この操作は取り消すことができません。`;
  document.getElementById('deleteConfirmModal').classList.remove('hidden');
}

function closeCityModal() {
  document.getElementById('cityModal').classList.add('hidden');
  currentEditMaster = null;
}

function exportCitiesCSV() {
  const headers = ['都市コード', '都市名（日本語）', '都市名（英語）', '国名'];
  const rows = filteredCities.map(city => [
    city.code,
    city.nameJa,
    city.nameEn,
    city.country
  ]);
  
  const csvContent = '\uFEFF' + [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `cities_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  
  console.log('Cities CSV exported successfully');
}

// ============================================
// Airports Master Functions
// ============================================

function filterAirports() {
  const codeSearch = document.getElementById('searchAirportCode').value.trim().toLowerCase();
  const nameSearch = document.getElementById('searchAirportName').value.trim().toLowerCase();
  const citySearch = document.getElementById('searchAirportCity').value.trim().toLowerCase();
  
  filteredAirports = mockAirports.filter(airport => {
    const matchCode = !codeSearch || airport.code.toLowerCase().includes(codeSearch);
    const matchName = !nameSearch || 
      airport.nameJa.toLowerCase().includes(nameSearch) || 
      airport.nameEn.toLowerCase().includes(nameSearch);
    const matchCity = !citySearch || airport.cityName.toLowerCase().includes(citySearch);
    return matchCode && matchName && matchCity;
  });
  
  renderAirportsTable();
}

function sortAirports(column) {
  // Implementation similar to booking sort
  renderAirportsTable();
}

function renderAirportsTable() {
  const tbody = document.getElementById('airportsTableBody');
  
  if (filteredAirports.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="px-6 py-4 text-center text-gray-500">
          該当する空港が見つかりませんでした
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = filteredAirports.map(airport => `
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${airport.code}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${airport.nameJa}</td>
      <td class="px-6 py-4 text-sm text-gray-500">${airport.nameEn}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${airport.cityName}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${airport.country}</td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          onclick="editAirport('${airport.code}')"
          class="text-blue-600 hover:text-blue-900 mr-4"
        >
          <i class="fas fa-edit"></i> 編集
        </button>
        <button 
          onclick="deleteAirport('${airport.code}')"
          class="text-red-600 hover:text-red-900"
        >
          <i class="fas fa-trash"></i> 削除
        </button>
      </td>
    </tr>
  `).join('');
}

function showAddAirportModal() {
  currentEditMaster = null;
  document.getElementById('airportModalTitle').textContent = '空港を追加';
  document.getElementById('airportCode').value = '';
  document.getElementById('airportNameJa').value = '';
  document.getElementById('airportNameEn').value = '';
  document.getElementById('airportCityCode').value = '';
  document.getElementById('airportCityName').value = '';
  document.getElementById('airportCountry').value = '';
  document.getElementById('airportCode').disabled = false;
  document.getElementById('airportModal').classList.remove('hidden');
}

function editAirport(code) {
  const airport = mockAirports.find(a => a.code === code);
  if (!airport) return;
  
  currentEditMaster = { ...airport };
  document.getElementById('airportModalTitle').textContent = '空港を編集';
  document.getElementById('airportCode').value = airport.code;
  document.getElementById('airportNameJa').value = airport.nameJa;
  document.getElementById('airportNameEn').value = airport.nameEn;
  document.getElementById('airportCityCode').value = airport.cityCode;
  document.getElementById('airportCityName').value = airport.cityName;
  document.getElementById('airportCountry').value = airport.country;
  document.getElementById('airportCode').disabled = true;
  document.getElementById('airportModal').classList.remove('hidden');
}

function saveAirport() {
  const code = document.getElementById('airportCode').value.trim().toUpperCase();
  const nameJa = document.getElementById('airportNameJa').value.trim();
  const nameEn = document.getElementById('airportNameEn').value.trim();
  const cityCode = document.getElementById('airportCityCode').value.trim().toUpperCase();
  const cityName = document.getElementById('airportCityName').value.trim();
  const country = document.getElementById('airportCountry').value.trim();
  
  if (!code || !nameJa || !nameEn || !cityCode || !cityName || !country) {
    alert('すべての項目を入力してください');
    return;
  }
  
  if (currentEditMaster) {
    // Update existing
    const index = mockAirports.findIndex(a => a.code === currentEditMaster.code);
    if (index !== -1) {
      mockAirports[index] = { code, nameJa, nameEn, cityCode, cityName, country };
    }
    alert('空港を更新しました');
  } else {
    // Add new
    if (mockAirports.find(a => a.code === code)) {
      alert('この空港コードは既に存在します');
      return;
    }
    mockAirports.push({ code, nameJa, nameEn, cityCode, cityName, country });
    alert('空港を追加しました');
  }
  
  closeAirportModal();
  filterAirports();
}

function deleteAirport(code) {
  currentDeleteTarget = { type: 'airport', code };
  document.getElementById('deleteConfirmMessage').textContent = 
    `空港「${code}」を削除してもよろしいですか？この操作は取り消すことができません。`;
  document.getElementById('deleteConfirmModal').classList.remove('hidden');
}

function closeAirportModal() {
  document.getElementById('airportModal').classList.add('hidden');
  currentEditMaster = null;
}

function exportAirportsCSV() {
  const headers = ['空港コード', '空港名（日本語）', '空港名（英語）', '都市コード', '都市名', '国名'];
  const rows = filteredAirports.map(airport => [
    airport.code,
    airport.nameJa,
    airport.nameEn,
    airport.cityCode,
    airport.cityName,
    airport.country
  ]);
  
  const csvContent = '\uFEFF' + [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `airports_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  
  console.log('Airports CSV exported successfully');
}

// ============================================
// Airlines Master Functions
// ============================================

function filterAirlines() {
  const codeSearch = document.getElementById('searchAirlineCode').value.trim().toLowerCase();
  const nameSearch = document.getElementById('searchAirlineName').value.trim().toLowerCase();
  
  filteredAirlines = mockAirlines.filter(airline => {
    const matchCode = !codeSearch || airline.code.toLowerCase().includes(codeSearch);
    const matchName = !nameSearch || 
      airline.nameJa.toLowerCase().includes(nameSearch) || 
      airline.nameEn.toLowerCase().includes(nameSearch);
    return matchCode && matchName;
  });
  
  renderAirlinesTable();
}

function sortAirlines(column) {
  // Implementation similar to booking sort
  renderAirlinesTable();
}

function renderAirlinesTable() {
  const tbody = document.getElementById('airlinesTableBody');
  
  if (filteredAirlines.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-gray-500">
          該当する航空会社が見つかりませんでした
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = filteredAirlines.map(airline => `
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${airline.code}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${airline.nameJa}</td>
      <td class="px-6 py-4 text-sm text-gray-500">${airline.nameEn}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${airline.country}</td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          onclick="editAirline('${airline.code}')"
          class="text-blue-600 hover:text-blue-900 mr-4"
        >
          <i class="fas fa-edit"></i> 編集
        </button>
        <button 
          onclick="deleteAirline('${airline.code}')"
          class="text-red-600 hover:text-red-900"
        >
          <i class="fas fa-trash"></i> 削除
        </button>
      </td>
    </tr>
  `).join('');
}

function showAddAirlineModal() {
  currentEditMaster = null;
  document.getElementById('airlineModalTitle').textContent = '航空会社を追加';
  document.getElementById('airlineCode').value = '';
  document.getElementById('airlineNameJa').value = '';
  document.getElementById('airlineNameEn').value = '';
  document.getElementById('airlineCountry').value = '';
  document.getElementById('airlineCode').disabled = false;
  document.getElementById('airlineModal').classList.remove('hidden');
}

function editAirline(code) {
  const airline = mockAirlines.find(a => a.code === code);
  if (!airline) return;
  
  currentEditMaster = { ...airline };
  document.getElementById('airlineModalTitle').textContent = '航空会社を編集';
  document.getElementById('airlineCode').value = airline.code;
  document.getElementById('airlineNameJa').value = airline.nameJa;
  document.getElementById('airlineNameEn').value = airline.nameEn;
  document.getElementById('airlineCountry').value = airline.country;
  document.getElementById('airlineCode').disabled = true;
  document.getElementById('airlineModal').classList.remove('hidden');
}

function saveAirline() {
  const code = document.getElementById('airlineCode').value.trim().toUpperCase();
  const nameJa = document.getElementById('airlineNameJa').value.trim();
  const nameEn = document.getElementById('airlineNameEn').value.trim();
  const country = document.getElementById('airlineCountry').value.trim();
  
  if (!code || !nameJa || !nameEn || !country) {
    alert('すべての項目を入力してください');
    return;
  }
  
  if (currentEditMaster) {
    // Update existing
    const index = mockAirlines.findIndex(a => a.code === currentEditMaster.code);
    if (index !== -1) {
      mockAirlines[index] = { code, nameJa, nameEn, country };
    }
    alert('航空会社を更新しました');
  } else {
    // Add new
    if (mockAirlines.find(a => a.code === code)) {
      alert('この航空会社コードは既に存在します');
      return;
    }
    mockAirlines.push({ code, nameJa, nameEn, country });
    alert('航空会社を追加しました');
  }
  
  closeAirlineModal();
  filterAirlines();
}

function deleteAirline(code) {
  currentDeleteTarget = { type: 'airline', code };
  document.getElementById('deleteConfirmMessage').textContent = 
    `航空会社「${code}」を削除してもよろしいですか？この操作は取り消すことができません。`;
  document.getElementById('deleteConfirmModal').classList.remove('hidden');
}

function closeAirlineModal() {
  document.getElementById('airlineModal').classList.add('hidden');
  currentEditMaster = null;
}

function exportAirlinesCSV() {
  const headers = ['航空会社コード', '航空会社名（日本語）', '航空会社名（英語）', '国名'];
  const rows = filteredAirlines.map(airline => [
    airline.code,
    airline.nameJa,
    airline.nameEn,
    airline.country
  ]);
  
  const csvContent = '\uFEFF' + [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `airlines_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  
  console.log('Airlines CSV exported successfully');
}

// ============================================
// Delete Confirmation Functions
// ============================================

function confirmDelete() {
  if (!currentDeleteTarget) return;
  
  const { type, code } = currentDeleteTarget;
  
  if (type === 'city') {
    const index = mockCities.findIndex(c => c.code === code);
    if (index !== -1) {
      mockCities.splice(index, 1);
      filteredCities = [...mockCities];
      renderCitiesTable();
      alert('都市を削除しました');
    }
  } else if (type === 'airport') {
    const index = mockAirports.findIndex(a => a.code === code);
    if (index !== -1) {
      mockAirports.splice(index, 1);
      filteredAirports = [...mockAirports];
      renderAirportsTable();
      alert('空港を削除しました');
    }
  } else if (type === 'airline') {
    const index = mockAirlines.findIndex(a => a.code === code);
    if (index !== -1) {
      mockAirlines.splice(index, 1);
      filteredAirlines = [...mockAirlines];
      renderAirlinesTable();
      alert('航空会社を削除しました');
    }
  }
  
  closeDeleteConfirmModal();
}

function closeDeleteConfirmModal() {
  document.getElementById('deleteConfirmModal').classList.add('hidden');
  currentDeleteTarget = null;
}

console.log('Admin panel loaded');
