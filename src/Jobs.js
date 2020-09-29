import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
// 以下数据需要通过AJAX请求返回JSON数据
var list = [{
  id:1,
  position: '000菜鸟 - 配送末端运营专家 - 考拉物流',
  base: '杭州',
  time:'2小时前',
}, {
  id:2,
  position: '阿里云智能事业群-技术支持专家-杭州/北京',
  base: '杭州，北京',
  time:'2小时前',
  }, {
  id:3,
  position: '阿里云智能事业群-系统架构师-北京/杭州',
  base: '杭州，北京',
  time:'2小时前',
}, {
  id:4,
  position: '阿里云智能事业群-技术支持专家-杭州/北京',
  base: '杭州，北京',
  time:'2小时前',
  }, {
  id:5,
  position: '阿里云智能事业群-系统架构师-北京/杭州',
  base: '杭州，北京',
  time:'2小时前',
}, {
  id:6,
  position: '阿里云智能事业群-技术支持专家-杭州/北京',
  base: '杭州，北京',
  time:'2小时前',
  }, {
  id:7,
  position: '阿里云智能事业群-系统架构师-北京/杭州',
  base: '杭州，北京',
  time:'2小时前',
}]

export default function Jobs(props) {
  let ulEl = useRef()
  let scrollContainer = useRef()
  let timeId
  
  useEffect(() => {
    scroll(30)
  }, [])

  return (
    <div>
      <div id="jobs-header">
        <div>最新职位</div>
        <Link>更多</Link>
      </div>
      <div ref={scrollContainer} style={{ height:'250px', overflow: 'hidden' }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <ul ref={ulEl}>
          {
            list.map(it =>
              <li key={it.id}>
                <Link>{it.position}</Link>
                <div id="base">{it.base}</div>
                <div>{it.time}</div>
              </li>)
          }
          
          {
            list.map(it =>
              <li key={it.id}>
                <Link>{it.position}</Link>
                <div id="base">{it.base}</div>
                <div>{it.time}</div>
              </li>)
          }
        </ul>
      </div>
    </div>
  )

  function scroll(speed) {
    timeId= setInterval(() => {
      scrollContainer.current.scrollTop++
      if (scrollContainer.current.scrollTop >= ulEl.current.scrollHeight/2) {
        scrollContainer.current.scrollTop= 0
      } 
    }, speed)
  }

  function handleMouseOver(e) {
    clearInterval(timeId)
  }

  function handleMouseLeave(e) {
    scroll(30)
  }
}