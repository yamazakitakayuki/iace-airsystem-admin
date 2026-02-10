import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Login Page */}
      <div id="loginPage" class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full">
          {/* Logo */}
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <i class="fas fa-plane text-white text-2xl"></i>
            </div>
            <h1 class="text-3xl font-bold text-gray-800">FlightSearch</h1>
            <p class="text-gray-600 mt-2">管理者ログイン</p>
          </div>

          {/* Login Form */}
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <form id="loginForm">
              <div class="space-y-6">
                {/* Email */}
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <div class="relative">
                    <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="email"
                      id="adminEmail"
                      placeholder="admin@example.com"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    パスワード
                  </label>
                  <div class="relative">
                    <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="password"
                      id="adminPassword"
                      placeholder="••••••••"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
                >
                  <i class="fas fa-sign-in-alt mr-2"></i>
                  ログイン
                </button>
              </div>
            </form>

            {/* Demo Credentials */}
            <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p class="text-sm text-gray-700 mb-2">
                <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                デモ用認証情報
              </p>
              <p class="text-xs text-gray-600">
                Email: admin@example.com<br/>
                Password: admin123
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Dashboard */}
      <div id="adminDashboard" class="hidden min-h-screen">
        {/* Header */}
        <header class="bg-white shadow-md">
          <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i class="fas fa-plane text-white"></i>
                </div>
                <div>
                  <h1 class="text-xl font-bold text-gray-800">FlightSearch 管理画面</h1>
                  <p class="text-xs text-gray-500">Admin Panel</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-600" id="adminUserEmail">admin@example.com</span>
                <button
                  onclick="handleLogout()"
                  class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <i class="fas fa-sign-out-alt mr-2"></i>
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar and Content */}
        <div class="flex">
          {/* Sidebar */}
          <aside class="w-64 bg-gray-800 text-white min-h-[calc(100vh-73px)]">
            <nav class="p-4">
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    onclick="showPage('dashboard'); return false;"
                    class="nav-link active flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
                    data-page="dashboard"
                  >
                    <i class="fas fa-home w-5"></i>
                    <span>ダッシュボード</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick="showPage('bookings'); return false;"
                    class="nav-link flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
                    data-page="bookings"
                  >
                    <i class="fas fa-ticket-alt w-5"></i>
                    <span>予約管理</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick="showPage('users'); return false;"
                    class="nav-link flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
                    data-page="users"
                  >
                    <i class="fas fa-users w-5"></i>
                    <span>ユーザー管理</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick="showPage('masters'); return false;"
                    class="nav-link flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
                    data-page="masters"
                  >
                    <i class="fas fa-database w-5"></i>
                    <span>マスタ管理</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick="showPage('logs'); return false;"
                    class="nav-link flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
                    data-page="logs"
                  >
                    <i class="fas fa-history w-5"></i>
                    <span>操作ログ</span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main class="flex-1 p-6 bg-gray-50 min-h-[calc(100vh-73px)] overflow-y-auto">
            {/* Dashboard Page */}
            <div id="dashboardPage" class="page-content">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">ダッシュボード</h2>
              
              {/* Stats Cards */}
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Today's Bookings */}
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600 mb-1">本日の予約</p>
                      <p class="text-3xl font-bold text-gray-800" id="todayBookings">0</p>
                    </div>
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-calendar-day text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Today's Revenue */}
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600 mb-1">本日の売上</p>
                      <p class="text-3xl font-bold text-gray-800" id="todayRevenue">¥0</p>
                    </div>
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-yen-sign text-green-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Monthly Bookings */}
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600 mb-1">今月の予約</p>
                      <p class="text-3xl font-bold text-gray-800" id="monthlyBookings">0</p>
                    </div>
                    <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-calendar-alt text-purple-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Monthly Revenue */}
                <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600 mb-1">今月の売上</p>
                      <p class="text-3xl font-bold text-gray-800" id="monthlyRevenue">¥0</p>
                    </div>
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-chart-line text-orange-600 text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">最近の予約</h3>
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="border-b border-gray-200">
                        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">予約番号</th>
                        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">ユーザー</th>
                        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">区間</th>
                        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">日付</th>
                        <th class="text-right py-3 px-4 text-sm font-semibold text-gray-600">金額</th>
                      </tr>
                    </thead>
                    <tbody id="recentBookingsTable">
                      <tr>
                        <td colspan="5" class="text-center py-8 text-gray-500">
                          <i class="fas fa-spinner fa-spin mr-2"></i>
                          読み込み中...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bookings Page */}
            <div id="bookingsPage" class="page-content hidden">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">予約管理</h2>
              <p class="text-gray-600">予約管理機能を実装中...</p>
            </div>

            {/* Users Page */}
            <div id="usersPage" class="page-content hidden">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">ユーザー管理</h2>
              <p class="text-gray-600">ユーザー管理機能を実装中...</p>
            </div>

            {/* Masters Page */}
            <div id="mastersPage" class="page-content hidden">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">マスタ管理</h2>
              <p class="text-gray-600">マスタ管理機能を実装中...</p>
            </div>

            {/* Logs Page */}
            <div id="logsPage" class="page-content hidden">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">操作ログ</h2>
              <p class="text-gray-600">操作ログ機能を実装中...</p>
            </div>
          </main>
        </div>
      </div>

      {/* Font Awesome */}
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
      
      {/* JavaScript */}
      <script src="/static/admin.js"></script>
    </div>
  )
})

export default app
