### Live : https://gemini-v2.netlify.app/

```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
font: Outfit;
```

### Handle img fallback

```javascript
<img
  src={Github_User_Img}
  alt="user-img"
  onError={(e) => {
    e.target.src = assets.user_icon;
  }}
/>
```

### custom tooltip

```css
.tooltip-container {
  position: relative;
}

.tooltip {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip-container:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
```

- if response has html tags, this will show that as content.

```jsx
<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
```

- to hide scroll-bar

```css
.result::-webkit-scrollbar {
  display: none;
}
```
