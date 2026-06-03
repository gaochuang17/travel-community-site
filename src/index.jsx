import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bell,
  Bookmark,
  CalendarDays,
  Camera,
  ChevronRight,
  CheckCircle2,
  Compass,
  Heart,
  Image,
  MapPin,
  MessageCircle,
  Mountain,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const destinations = [
  {
    city: "京都",
    tag: "古寺与咖啡",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
    members: "12.8k",
    temp: "23C"
  },
  {
    city: "冰岛南岸",
    tag: "瀑布与极光",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80",
    members: "8.4k",
    temp: "9C"
  },
  {
    city: "云南雨崩",
    tag: "徒步与雪山",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    members: "6.1k",
    temp: "16C"
  }
];

const initialPosts = [
  {
    author: "林舟",
    avatar: "L",
    location: "格鲁吉亚 · 卡兹别克",
    title: "四天三晚高加索轻徒步路线，适合第一次去的人",
    text: "从第比利斯出发，沿军用公路一路到雪山脚下。住宿建议选镇中心，第二天去 Gergeti 教堂刚好能赶上晨光。",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
    likes: 284,
    comments: 43,
    saves: 97
  },
  {
    author: "Mira",
    avatar: "M",
    location: "葡萄牙 · 里斯本",
    title: "在阿尔法玛迷路的一下午",
    text: "把行程留白半天，听一场 Fado，坐 28 路电车，再去观景台等日落。老城台阶很多，鞋一定要舒服。",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=80",
    likes: 418,
    comments: 66,
    saves: 132
  }
];

const emptyDraft = {
  title: "",
  location: "",
  text: "",
  image: ""
};

const fallbackTripImage =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85";

const trips = [
  "端午青甘小环线拼车",
  "新疆夏季自驾同伴",
  "东京胶片散步路线",
  "川西露营装备清单"
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);
  const [notice, setNotice] = useState("");

  const openShare = () => setIsShareOpen(true);
  const closeShare = () => setIsShareOpen(false);

  const updateDraft = (event) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
  };

  const submitTrip = (event) => {
    event.preventDefault();

    const nextPost = {
      author: "你",
      avatar: "你",
      location: draft.location.trim(),
      title: draft.title.trim(),
      text: draft.text.trim(),
      image: draft.image.trim() || fallbackTripImage,
      likes: 0,
      comments: 0,
      saves: 0,
      isFresh: true
    };

    setPosts((current) => [nextPost, ...current]);
    setDraft(emptyDraft);
    setIsShareOpen(false);
    setNotice("旅途已发布到社区动态");
    window.setTimeout(() => setNotice(""), 2800);

    requestAnimationFrame(() => {
      document.getElementById("notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const isDraftReady =
    draft.title.trim().length > 0 &&
    draft.location.trim().length > 0 &&
    draft.text.trim().length > 0;

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="行野首页">
          <span className="brand-mark">
            <Compass size={22} />
          </span>
          <span>行野</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#discover">发现</a>
          <a href="#routes">路线</a>
          <a href="#groups">同伴</a>
          <a href="#notes">笔记</a>
        </nav>
        <div className="top-actions">
          <label className="search-box">
            <Search size={18} />
            <input placeholder="搜索目的地、攻略、同伴" />
          </label>
          <button className="icon-button" aria-label="通知">
            <Bell size={19} />
          </button>
          <button className="primary-button" onClick={openShare}>
            <Plus size={18} />
            发布
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-media" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            本周 48,000+ 条真实旅行灵感
          </p>
          <h1>和懂路线的人一起出发</h1>
          <p className="hero-copy">
            在行野发现旅行笔记、拼车搭子、城市路线和当地体验，把收藏夹里的远方变成下一次出发。
          </p>
          <div className="hero-actions">
            <button className="primary-button large">
              探索社区
              <ChevronRight size={19} />
            </button>
            <button className="secondary-button" onClick={openShare}>
              <Camera size={18} />
              分享旅途
            </button>
          </div>
        </div>
        <div className="hero-panel">
          <span className="panel-label">今日热门路线</span>
          <strong>云南雨崩 5 日轻徒步</strong>
          <p>23 人正在讨论住宿、路况和装备。</p>
          <div className="mini-avatars" aria-label="参与用户">
            <span>J</span>
            <span>Q</span>
            <span>Y</span>
          </div>
        </div>
      </section>

      <section className="content-grid" id="discover">
        <aside className="left-rail">
          <div className="profile-card">
            <div className="profile-cover" />
            <div className="profile-avatar">旅</div>
            <h2>你的旅行圈</h2>
            <p>收藏路线、追踪目的地，找到下一段同行的人。</p>
            <div className="profile-stats">
              <span><strong>36</strong>收藏</span>
              <span><strong>12</strong>关注</span>
              <span><strong>5</strong>草稿</span>
            </div>
          </div>

          <div className="side-section" id="groups">
            <h3>同伴招募</h3>
            {trips.map((trip) => (
              <button className="trip-link" key={trip}>
                <Users size={16} />
                <span>{trip}</span>
                <ChevronRight size={15} />
              </button>
            ))}
          </div>
        </aside>

        <section className="feed-column" id="notes">
          <div className="section-heading">
            <div>
              <p className="eyebrow compact">社区精选</p>
              <h2>旅行者正在分享</h2>
            </div>
            <button className="secondary-button small">
              最新
              <ChevronRight size={16} />
            </button>
          </div>

          {posts.map((post) => (
            <article className={post.isFresh ? "post-card fresh-post" : "post-card"} key={`${post.author}-${post.title}`}>
              <img src={post.image} alt={post.title} />
              <div className="post-body">
                <div className="post-author">
                  <span className="avatar">{post.avatar}</span>
                  <div>
                    <strong>{post.author}</strong>
                    <p>
                      <MapPin size={14} />
                      {post.location}
                    </p>
                  </div>
                </div>
                {post.isFresh && <span className="fresh-badge">刚刚发布</span>}
                <h3>{post.title}</h3>
                <p className="post-text">{post.text}</p>
                <div className="post-actions">
                  <button><Heart size={17} />{post.likes}</button>
                  <button><MessageCircle size={17} />{post.comments}</button>
                  <button><Bookmark size={17} />{post.saves}</button>
                  <button><Send size={17} />转发</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="right-rail" id="routes">
          <div className="side-section">
            <h3>热门目的地</h3>
            <div className="destination-list">
              {destinations.map((item) => (
                <article className="destination-card" key={item.city}>
                  <img src={item.image} alt={item.city} />
                  <div>
                    <strong>{item.city}</strong>
                    <p>{item.tag}</p>
                    <span>{item.members} 人关注 · {item.temp}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="side-section route-card">
            <div className="route-icon">
              <Mountain size={21} />
            </div>
            <h3>路线规划器</h3>
            <p>把收藏的笔记拖进清单，自动生成每日路线和预算。</p>
            <button className="primary-button full">
              <CalendarDays size={17} />
              新建行程
            </button>
          </div>

          <div className="rating-strip">
            <Star size={18} />
            <span>4.9 社区路线平均评分</span>
          </div>
        </aside>
      </section>

      {isShareOpen && (
        <ShareTripModal
          draft={draft}
          isReady={isDraftReady}
          onChange={updateDraft}
          onClose={closeShare}
          onSubmit={submitTrip}
        />
      )}

      {notice && (
        <div className="toast" role="status">
          <CheckCircle2 size={18} />
          {notice}
        </div>
      )}
    </main>
  );
}

function ShareTripModal({ draft, isReady, onChange, onClose, onSubmit }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="share-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <div>
            <p className="eyebrow compact">分享旅途</p>
            <h2 id="share-title">发布新的旅行笔记</h2>
          </div>
          <button className="icon-button" type="button" aria-label="关闭发布窗口" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <form className="share-form" onSubmit={onSubmit}>
          <label>
            标题
            <input
              autoFocus
              maxLength="42"
              name="title"
              onChange={onChange}
              placeholder="比如：三天两晚海岛慢旅行"
              required
              value={draft.title}
            />
          </label>

          <label>
            目的地
            <input
              maxLength="28"
              name="location"
              onChange={onChange}
              placeholder="比如：福建 · 平潭"
              required
              value={draft.location}
            />
          </label>

          <label>
            旅途故事
            <textarea
              maxLength="220"
              name="text"
              onChange={onChange}
              placeholder="写下路线亮点、交通建议、预算或你最想推荐的瞬间。"
              required
              rows="5"
              value={draft.text}
            />
          </label>

          <label>
            图片链接
            <span className="optional-label">可选</span>
            <div className="image-input">
              <Image size={17} />
              <input
                name="image"
                onChange={onChange}
                placeholder="粘贴图片 URL，留空会使用默认旅行封面"
                type="url"
                value={draft.image}
              />
            </div>
          </label>

          {draft.image && (
            <div className="image-preview">
              <img src={draft.image} alt="旅途图片预览" />
            </div>
          )}

          <div className="modal-actions">
            <button className="secondary-button" type="button" onClick={onClose}>
              取消
            </button>
            <button className="primary-button" type="submit" disabled={!isReady}>
              <Send size={17} />
              发布旅途
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
