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
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">予約管理</h2>
                <button
                  onclick="exportBookingsCSV()"
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center"
                >
                  <i class="fas fa-file-csv mr-2"></i>
                  CSV出力
                </button>
              </div>

              {/* Search and Filter */}
              <div class="bg-white rounded-xl shadow-md p-6 mb-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">予約番号</label>
                    <input
                      type="text"
                      id="searchBookingId"
                      placeholder="BK2026..."
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onkeyup="filterBookings()"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">ユーザー名</label>
                    <input
                      type="text"
                      id="searchUserName"
                      placeholder="山田..."
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onkeyup="filterBookings()"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                    <input
                      type="text"
                      id="searchEmail"
                      placeholder="user@example.com"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onkeyup="filterBookings()"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">ステータス</label>
                    <select
                      id="filterStatus"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onchange="filterBookings()"
                    >
                      <option value="">すべて</option>
                      <option value="confirmed">予約確認済み</option>
                      <option value="cancelled">キャンセル済み</option>
                      <option value="completed">利用済み</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bookings Table */}
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('id')">
                          予約番号 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('userName')">
                          ユーザー <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('route')">
                          区間 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('date')">
                          出発日 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('bookingDate')">
                          予約日 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600">ステータス</th>
                        <th class="text-right py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortBookings('total')">
                          金額 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-center py-4 px-4 text-sm font-semibold text-gray-600">操作</th>
                      </tr>
                    </thead>
                    <tbody id="bookingsTableBody">
                      <tr>
                        <td colspan="8" class="text-center py-8 text-gray-500">
                          <i class="fas fa-spinner fa-spin mr-2"></i>
                          読み込み中...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div class="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div class="text-sm text-gray-600">
                    <span id="bookingsCount">0</span> 件の予約
                  </div>
                  <div class="flex items-center space-x-2">
                    <button
                      id="prevPageBtn"
                      onclick="changePage(-1)"
                      class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="text-sm text-gray-600">
                      ページ <span id="currentPage">1</span> / <span id="totalPages">1</span>
                    </span>
                    <button
                      id="nextPageBtn"
                      onclick="changePage(1)"
                      class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Users Page */}
            <div id="usersPage" class="page-content hidden">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">ユーザー管理</h2>
                <button
                  onclick="exportUsersCSV()"
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center shadow-md hover:shadow-lg"
                >
                  <i class="fas fa-file-csv mr-2"></i>
                  CSV一括出力
                </button>
              </div>

              {/* Search and Filter */}
              <div class="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">検索・フィルター</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                    <input
                      type="email"
                      id="searchUserEmail"
                      placeholder="user@example.com"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">氏名</label>
                    <input
                      type="text"
                      id="searchUserFullName"
                      placeholder="山田 太郎"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">ステータス</label>
                    <select
                      id="filterUserStatus"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">すべて</option>
                      <option value="active">有効</option>
                      <option value="suspended">停止中</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-end space-x-3">
                  <button
                    onclick="resetUserFilters()"
                    class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    リセット
                  </button>
                  <button
                    onclick="searchUsers()"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <i class="fas fa-search mr-2"></i>
                    検索
                  </button>
                </div>
              </div>

              {/* Users Table */}
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortUsers('email')">
                          メールアドレス <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortUsers('name')">
                          氏名 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                          電話番号
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100" onclick="sortUsers('registeredDate')">
                          登録日 <i class="fas fa-sort text-gray-400 ml-1"></i>
                        </th>
                        <th class="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                          最終ログイン
                        </th>
                        <th class="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                          予約数
                        </th>
                        <th class="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                          ステータス
                        </th>
                        <th class="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody id="usersTableBody">
                      <tr>
                        <td colspan="8" class="text-center py-12 text-gray-500">
                          <i class="fas fa-spinner fa-spin mr-2"></i>
                          読み込み中...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div class="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div class="text-sm text-gray-600">
                    <span id="usersPaginationInfo">1-5 / 全 0 件</span>
                  </div>
                  <div class="flex space-x-2">
                    <button
                      id="usersPrevPage"
                      onclick="changeUsersPage(-1)"
                      class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      <i class="fas fa-chevron-left"></i>
                    </button>
                    <button
                      id="usersNextPage"
                      onclick="changeUsersPage(1)"
                      class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
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

      {/* Booking Detail Modal */}
      <div id="bookingDetailModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            {/* Modal Header */}
            <div class="flex justify-between items-center mb-6 pb-4 border-b">
              <h3 class="text-2xl font-bold text-gray-800">予約詳細</h3>
              <button onclick="closeBookingDetailModal()" class="text-gray-400 hover:text-gray-600 text-2xl">
                <i class="fas fa-times"></i>
              </button>
            </div>

            {/* Booking Detail Content */}
            <div id="bookingDetailContent">
              {/* Content will be inserted by JavaScript */}
            </div>

            {/* Action Buttons */}
            <div class="mt-6 pt-4 border-t flex justify-end space-x-4">
              <button
                onclick="closeBookingDetailModal()"
                class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                閉じる
              </button>
              <button
                id="editBookingBtn"
                onclick="showEditBookingModal()"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <i class="fas fa-edit mr-2"></i>
                編集
              </button>
              <button
                id="cancelBookingBtn"
                onclick="showCancelBookingConfirm()"
                class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <i class="fas fa-times-circle mr-2"></i>
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      <div id="cancelConfirmModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
            予約キャンセル確認
          </h3>
          <p class="text-gray-600 mb-6">
            この予約をキャンセルしてもよろしいですか？<br/>
            この操作は取り消すことができません。
          </p>
          <div class="flex justify-end space-x-4">
            <button
              onclick="closeCancelConfirm()"
              class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              戻る
            </button>
            <button
              onclick="confirmCancelBooking()"
              class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              キャンセルする
            </button>
          </div>
        </div>
      </div>

      {/* User Detail Modal */}
      <div id="userDetailModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            {/* Modal Header */}
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-bold text-gray-800 flex items-center">
                <i class="fas fa-user text-blue-600 mr-2"></i>
                ユーザー詳細
              </h3>
              <button onclick="closeUserDetailModal()" class="text-gray-400 hover:text-gray-600 text-2xl">
                <i class="fas fa-times"></i>
              </button>
            </div>

            {/* User Detail Content */}
            <div id="userDetailContent">
              {/* Content will be inserted by JavaScript */}
            </div>

            {/* Action Buttons */}
            <div class="mt-6 flex justify-end space-x-4">
              <button
                onclick="closeUserDetailModal()"
                class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                閉じる
              </button>
              <button
                id="toggleUserStatusBtn"
                onclick="toggleUserStatus()"
                class="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                <i class="fas fa-ban mr-2"></i>
                アカウント停止
              </button>
            </div>
          </div>
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
