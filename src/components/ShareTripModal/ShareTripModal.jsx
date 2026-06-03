import React from "react";
import { X, Send, Image } from "lucide-react";
import styles from "./ShareTripModal.module.css";

export function ShareTripModal({ draft, isReady, onChange, onClose, onSubmit }) {
  return (
    <div className={styles.modalBackdrop} role="presentation" onMouseDown={onClose}>
      <section
        className={styles.shareModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHeading}>
          <div>
            <p className={styles.eyebrow}>分享旅途</p>
            <h2 id="share-title">发布新的旅行笔记</h2>
          </div>
          <button className={styles.iconButton} type="button" aria-label="关闭发布窗口" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <form className={styles.shareForm} onSubmit={onSubmit}>
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
            <span className={styles.optionalLabel}>可选</span>
            <div className={styles.imageInput}>
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
            <div className={styles.imagePreview}>
              <img src={draft.image} alt="旅途图片预览" />
            </div>
          )}

          <div className={styles.modalActions}>
            <button className={styles.secondaryButton} type="button" onClick={onClose}>
              取消
            </button>
            <button className={styles.primaryButton} type="submit" disabled={!isReady}>
              <Send size={17} />
              发布旅途
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
