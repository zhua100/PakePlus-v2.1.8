window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>可转债专业看盘</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: #0a0e1a;
            color: #e0e4f0;
            padding: 12px;
        }
        
        .header {
            background: linear-gradient(135deg, #1a2642 0%, #1e3c72 100%);
            padding: 20px 15px;
            border-radius: 16px;
            margin-bottom: 16px;
            box-shadow: 0 4px 20px rgba(0, 40, 100, 0.5);
            border: 1px solid #2d374d;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 4px;
            color: #fff;
            text-shadow: 0 0 10px #2a7de1;
        }
        
        .header p {
            color: #8a93b0;
            font-size: 14px;
        }
        
        .stats-bar {
            display: flex;
            justify-content: space-between;
            background: #141a26;
            padding: 12px;
            border-radius: 12px;
            margin-bottom: 16px;
            border: 1px solid #2d374d;
        }
        
        .stat-item {
            text-align: center;
            flex: 1;
        }
        
        .stat-label {
            font-size: 12px;
            color: #8a93b0;
            margin-bottom: 4px;
        }
        
        .stat-value {
            font-size: 16px;
            font-weight: 600;
            color: #2a7de1;
        }
        
        .filter-section {
            background: #141a26;
            padding: 12px;
            border-radius: 12px;
            margin-bottom: 16px;
            border: 1px solid #2d374d;
        }
        
        .filter-row {
            display: flex;
            gap: 8px;
        }
        
        select {
            flex: 1;
            background: #1e2538;
            color: #e0e4f0;
            border: 1px solid #2d374d;
            padding: 10px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            outline: none;
        }
        
        select:hover {
            border-color: #2a7de1;
        }
        
        select option {
            background: #1e2538;
            color: #e0e4f0;
        }
        
        .bond-card {
            background: #1e2538;
            border: 1px solid #2d374d;
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 12px;
            transition: all 0.2s;
        }
        
        .bond-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(42, 125, 225, 0.2);
            border-color: #2a7de1;
        }
        
        .bond-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }
        
        .bond-title {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .bond-code {
            font-weight: 600;
            color: #2a7de1;
            font-size: 16px;
        }
        
        .bond-name {
            color: #8a93b0;
            font-size: 14px;
        }
        
        .bond-price {
            text-align: right;
        }
        
        .current-price {
            font-size: 20px;
            font-weight: 700;
            color: #e0e4f0;
        }
        
        .price-change {
            font-size: 14px;
            margin-left: 8px;
        }
        
        .price-change.up {
            color: #00c48c;
        }
        
        .price-change.down {
            color: #ff6b6b;
        }
        
        .bond-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            padding: 12px 0;
            border-top: 1px solid #2d374d;
            border-bottom: 1px solid #2d374d;
            margin: 12px 0;
        }
        
        .detail-item {
            text-align: center;
        }
        
        .detail-label {
            font-size: 11px;
            color: #8a93b0;
            margin-bottom: 2px;
        }
        
        .detail-value {
            font-size: 15px;
            font-weight: 600;
        }
        
        .detail-value.premium {
            color: #ffb547;
        }
        
        .detail-value.double-low {
            color: #2a7de1;
        }
        
        .bond-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #8a93b0;
        }
        
        .stock-info {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        
        .stock-change.up {
            color: #00c48c;
        }
        
        .stock-change.down {
            color: #ff6b6b;
        }
        
        .warning-tag {
            background: rgba(255, 107, 107, 0.2);
            color: #ff6b6b;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            border: 1px solid #ff6b6b;
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            color: #8a93b0;
        }
        
        .footer {
            text-align: center;
            padding: 20px;
            color: #4a5568;
            font-size: 12px;
        }
        
        .update-time {
            color: #2a7de1;
            font-size: 12px;
            text-align: right;
            margin-top: 8px;
        }
        
        .error-message {
            background: rgba(255, 107, 107, 0.1);
            border: 1px solid #ff6b6b;
            color: #ff6b6b;
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📈 可转债专业看盘</h1>
        <p>实时行情 · 正股联动 · 强赎预警</p>
    </div>
    
    <div class="stats-bar">
        <div class="stat-item">
            <div class="stat-label">转债数量</div>
            <div class="stat-value" id="bond-count">0</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">平均溢价</div>
            <div class="stat-value" id="avg-premium">0%</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">平均双低</div>
            <div class="stat-value" id="avg-double-low">0</div>
        </div>
    </div>
    
    <div class="filter-section">
        <div class="filter-row">
            <select id="sortSelect">
                <option value="change">📊 按涨跌幅</option>
                <option value="price">💰 按价格</option>
                <option value="premium" selected>📈 按溢价率</option>
                <option value="double_low">⚖️ 按双低值</option>
            </select>
            <select id="filterSelect">
                <option value="all">📋 全部转债</option>
                <option value="premium_low">🔍 低溢价 (&lt;20%)</option>
                <option value="double_low">🎯 双低 &lt;150</option>
                <option value="price_low">💎 低价 (&lt;120)</option>
            </select>
        </div>
    </div>
    
    <div id="bond-list">
        <div class="loading">加载数据中...</div>
    </div>
    
    <div class="footer">
        <div>数据更新于: <span id="update-time">--</span></div>
        <div style="margin-top: 5px;">数据来源: 东方财富 · 实时数据</div>
    </div>

    <script>
        let bondsData = [];
        let filteredData = [];

        // 从后端获取数据
        async function fetchBonds() {
            try {
                const response = await fetch('http://localhost:5000/api/bonds');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('获取到数据:', data);
                
                // 处理数据
                bondsData = data.map(bond => ({
                    code: bond.code || '--',
                    name: bond.name || '--',
                    price: bond.price || 0,
                    change: bond.change || 0,
                    premium: bond.premium || 0,
                    double_low: bond.double_low || 0,
                    convert_value: bond.convert_value || 0,
                    stock_name: bond.stock_name || '--',
                    stock_change: bond.stock_change || 0,
                    stock_price: bond.stock_price || 0
                }));
                
                // 过滤掉无效数据（价格=0的通常是未上市）
                bondsData = bondsData.filter(bond => bond.price > 0);
                
                if (bondsData.length === 0) {
                    document.getElementById('bond-list').innerHTML = '<div class="loading">暂无数据</div>';
                } else {
                    applyFilterAndSort();
                    updateStats();
                }
                
                return bondsData;
            } catch (error) {
                console.error('获取数据失败:', error);
                document.getElementById('bond-list').innerHTML = '<div class="error-message">❌ 连接失败，请检查Python服务器是否运行</div>';
                return [];
            }
        }

        // 应用筛选和排序
        function applyFilterAndSort() {
            const sortBy = document.getElementById('sortSelect').value;
            const filterBy = document.getElementById('filterSelect').value;
            
            // 筛选
            filteredData = [...bondsData];
            
            if (filterBy === 'premium_low') {
                filteredData = filteredData.filter(b => b.premium > 0 && b.premium < 20);
            } else if (filterBy === 'double_low') {
                filteredData = filteredData.filter(b => b.double_low > 0 && b.double_low < 150);
            } else if (filterBy === 'price_low') {
                filteredData = filteredData.filter(b => b.price < 120);
            }
            
            // 排序
            filteredData.sort((a, b) => {
                if (sortBy === 'price') return (b.price || 0) - (a.price || 0);
                if (sortBy === 'change') return (b.change || 0) - (a.change || 0);
                if (sortBy === 'premium') return (a.premium || 0) - (b.premium || 0);
                if (sortBy === 'double_low') return (a.double_low || 0) - (b.double_low || 0);
                return 0;
            });
            
            renderBonds();
        }

        // 渲染债券列表
        function renderBonds() {
            const container = document.getElementById('bond-list');
            
            if (!filteredData || filteredData.length === 0) {
                container.innerHTML = '<div class="loading">暂无符合条件的数据</div>';
                return;
            }
            
            let html = '';
            filteredData.forEach(bond => {
                const changeClass = bond.change >= 0 ? 'up' : 'down';
                const changeSymbol = bond.change >= 0 ? '+' : '';
                const stockChangeClass = bond.stock_change >= 0 ? 'up' : 'down';
                
                // 强赎预警（价格>130且溢价率<20%且溢价率>0）
                const hasWarning = bond.price > 130 && bond.premium < 20 && bond.premium > 0;
                
                html += `
                    <div class="bond-card">
                        <div class="bond-header">
                            <div class="bond-title">
                                <span class="bond-code">${bond.code}</span>
                                <span class="bond-name">${bond.name}</span>
                            </div>
                            <div class="bond-price">
                                <span class="current-price">¥${bond.price.toFixed(2)}</span>
                                <span class="price-change ${changeClass}">
                                    ${changeSymbol}${bond.change.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                        
                        <div class="bond-details">
                            <div class="detail-item">
                                <div class="detail-label">溢价率</div>
                                <div class="detail-value premium">${bond.premium > 0 ? bond.premium.toFixed(2) + '%' : '--'}</div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-label">双低值</div>
                                <div class="detail-value double-low">${bond.double_low > 0 ? bond.double_low.toFixed(2) : '--'}</div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-label">转股价值</div>
                                <div class="detail-value">¥${bond.convert_value > 0 ? bond.convert_value.toFixed(2) : '--'}</div>
                            </div>
                        </div>
                        
                        <div class="bond-footer">
                            <div class="stock-info">
                                <span>${bond.stock_name}</span>
                                <span class="stock-change ${stockChangeClass}">
                                    ${bond.stock_change ? (bond.stock_change > 0 ? '+' : '') + bond.stock_change.toFixed(2) + '%' : '--'}
                                </span>
                            </div>
                            ${hasWarning ? '<span class="warning-tag">⚠️ 强赎预警</span>' : ''}
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
            document.getElementById('update-time').innerText = new Date().toLocaleTimeString();
        }

        // 更新统计数据
        function updateStats() {
            const validBonds = bondsData.filter(b => b.price > 0);
            document.getElementById('bond-count').innerText = validBonds.length;
            
            const validPremium = validBonds.filter(b => b.premium > 0);
            const avgPremium = validPremium.reduce((sum, b) => sum + b.premium, 0) / (validPremium.length || 1);
            document.getElementById('avg-premium').innerText = avgPremium.toFixed(2) + '%';
            
            const validDoubleLow = validBonds.filter(b => b.double_low > 0);
            const avgDoubleLow = validDoubleLow.reduce((sum, b) => sum + b.double_low, 0) / (validDoubleLow.length || 1);
            document.getElementById('avg-double-low').innerText = avgDoubleLow.toFixed(2);
        }

        // 监听筛选变化
        document.getElementById('sortSelect').addEventListener('change', applyFilterAndSort);
        document.getElementById('filterSelect').addEventListener('change', applyFilterAndSort);

        // 页面加载后开始获取数据
        document.addEventListener('DOMContentLoaded', () => {
            fetchBonds();
            // 每30秒刷新一次
            setInterval(fetchBonds, 30000);
        });
    </script>
</body>
</html>