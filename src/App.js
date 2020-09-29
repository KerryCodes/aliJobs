import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'
import Jobs from './Jobs'

//以下利用router做前端路由跳转，因为没有后端配合，这里只做示意
function App() {
  return (
    <Router>
      <header>
        <div>
          <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="logo"/>
          <span>|社招网站</span> 
        </div>
        <div id="header-links">
          <Link>首 页</Link>
          <Link>社会招聘</Link>
          <Link>校园招聘</Link>
          <Link>了解阿里</Link>
          <Link>个人中心</Link>
        </div>
        <div>
          <span>欢迎来到阿里巴巴集团招聘！</span>
          <span>登录|</span>
          <span>注册</span>
        </div>
      </header>
      <main>
        <span></span>
        <div id="slogan">
          <div>
            If not now, when?
          </div>
          <div>
            If not me, who?
          </div>
          <div>
            此时此刻，非我莫属!
          </div>
        </div>
        <div>
          <form>
            <div id="cover-form"></div>
            <input type="text" placeholder="请输入职位关键词"/>
            <button>搜索</button>
          </form>
          <div>
            <span>热门搜索：</span>
            <Link>IOS</Link>
            <Link>数据</Link>
            <Link>安全</Link>
            <Link>搜索</Link>
            <Link>算法</Link>
            <Link>运营</Link>
            <Link>视觉</Link>
            <Link>交互</Link>
            <Link>前端</Link>
          </div>
        </div>
      </main>
      <footer>
        <Jobs></Jobs>
        <div>
          <div>
            <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="阿里云" />
          </div>
          <div>
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="企业智能"/>
          </div>
        </div>
      </footer>
    </Router>
  )
}

export default App;
