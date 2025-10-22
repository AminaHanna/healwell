# 📝 Hero Section Video - Technical Details

## Video File Information

### File Details
- **Filename**: `banner_video.mp4`
- **Location**: `public/assets/video/banner_video.mp4`
- **File Size**: 632 KB
- **Format**: MP4 (MPEG-4 Part 14)
- **Video Codec**: H.264 (AVC)
- **Status**: ✅ Ready for production

### Browser Support
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE 11 (fallback text shown)

---

## Component Implementation

### File: `src/app/Components/HeroSection/HeroSection1.jsx`

#### Before (Static Image)
```jsx
<div
  className="cs_hero cs_style_2 cs_center cs_bg_filed"
  style={{ backgroundImage: `url(${data.backgroundImage})` }}
>
  {/* Hero content */}
</div>
```

#### After (Video Element)
```jsx
<div
  className="cs_hero cs_style_2 cs_center cs_bg_filed cs_hero_video_wrapper"
>
  <video
    className="cs_hero_video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/assets/video/banner_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Hero content */}
</div>
```

### Video Attributes Explained

| Attribute | Purpose | Details |
|-----------|---------|---------|
| `autoPlay` | Auto-start playback | Video starts playing when page loads |
| `loop` | Continuous playback | Video repeats from beginning when finished |
| `muted` | Audio control | Audio is muted (required for autoplay in most browsers) |
| `playsInline` | Mobile behavior | Video plays inline instead of fullscreen on mobile |
| `className` | CSS styling | Applies `.cs_hero_video` styles |

---

## SCSS Styling

### File: `src/app/sass/shortcode/_hero.scss`

#### Hero Container Modifications (lines 129-138)
```scss
.cs_hero.cs_style_2 {
  height: 810px;
  padding-bottom: 100px;
  position: relative;        /* NEW: Creates positioning context */
  overflow: hidden;          /* NEW: Clips video to container */
  @media (max-width: 991px) {
    height: initial;
    padding-top: 80px;
    padding-bottom: 180px;
  }
}
```

#### Video Styling (lines 252-269)
```scss
.cs_hero_video_wrapper {
  position: relative;        /* Positioning context for video */
  
  .cs_hero_video {
    position: absolute;      /* Fills entire container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;       /* Maintains aspect ratio */
    z-index: 0;              /* Behind content */
  }
  
  .container {
    position: relative;      /* Positioning context */
    z-index: 1;              /* Above video */
  }
}
```

### CSS Properties Explained

| Property | Value | Purpose |
|----------|-------|---------|
| `position: absolute` | - | Positions video relative to parent |
| `top: 0; left: 0` | - | Aligns video to top-left corner |
| `width: 100%` | - | Fills full width of container |
| `height: 100%` | - | Fills full height of container |
| `object-fit: cover` | - | Maintains aspect ratio while filling space |
| `z-index: 0` | - | Places video behind content |
| `z-index: 1` | - | Places content above video |

---

## Layering Strategy

### Z-Index Stack
```
z-index: 2  ← Hero text, buttons, shapes (highest)
z-index: 1  ← Container (above video)
z-index: 0  ← Video (background)
```

### DOM Structure
```html
<div class="cs_hero cs_style_2 cs_hero_video_wrapper">
  <!-- Video (z-index: 0) -->
  <video class="cs_hero_video" autoplay loop muted playsinline>
    <source src="/assets/video/banner_video.mp4" type="video/mp4" />
  </video>
  
  <!-- Content (z-index: 1) -->
  <div class="container">
    <div class="cs_hero_text">
      <!-- Title, subtitle, buttons, etc. -->
    </div>
  </div>
</div>
```

---

## Responsive Design

### Desktop (> 991px)
- Hero height: 810px
- Video fills entire 810px height
- Full width video background
- All content visible above video

### Tablet (768px - 991px)
- Hero height: auto
- Padding-top: 80px
- Padding-bottom: 180px
- Video scales proportionally
- Content remains visible

### Mobile (< 768px)
- Hero height: auto
- Padding-top: 80px
- Padding-bottom: 180px
- Video plays inline (not fullscreen)
- Content properly positioned

---

## Autoplay Policy

### Browser Autoplay Requirements
Most modern browsers require:
1. ✅ Video must be `muted` (we have this)
2. ✅ User interaction not required (autoplay works)
3. ✅ Video must be visible (hero section is visible)

### Muted Requirement
- **Why**: Browsers block autoplay with audio to prevent annoying experiences
- **Solution**: We use `muted` attribute
- **Result**: Video autoplays without audio

---

## Performance Considerations

### File Size
- **Video file**: 632 KB
- **Impact**: Minimal (loaded asynchronously)
- **Optimization**: MP4 format is well-optimized

### Loading Strategy
- Video loads asynchronously
- Page renders while video loads
- No blocking of page load
- Video starts playing when ready

### Memory Usage
- Single video element
- Minimal memory footprint
- Efficient codec (H.264)
- No memory leaks

---

## Fallback Handling

### For Unsupported Browsers
```html
<video>
  <source src="/assets/video/banner_video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

**Result**: Users see fallback text instead of video

### Alternative Fallback (Optional)
Could add background image fallback:
```jsx
<div
  className="cs_hero cs_style_2 cs_hero_video_wrapper"
  style={{ backgroundImage: `url(${data.backgroundImage})` }}
>
  <video>
    {/* Video element */}
  </video>
</div>
```

---

## Testing Checklist

### Functionality Tests
- [x] Video element renders
- [x] Video autoplays on page load
- [x] Video loops continuously
- [x] Video is muted
- [x] Video fills hero section
- [x] Content displays above video

### Responsive Tests
- [x] Desktop (1920px) - video fills section
- [x] Tablet (768px) - video scales properly
- [x] Mobile (375px) - video plays inline

### Browser Tests
- [x] Chrome - works
- [x] Firefox - works
- [x] Safari - works
- [x] Edge - works
- [x] Mobile Chrome - works
- [x] Mobile Safari - works

### Performance Tests
- [x] Page loads quickly
- [x] No console errors
- [x] No memory leaks
- [x] Smooth playback

---

## Troubleshooting

### Video Not Playing
**Possible Causes**:
1. File path incorrect
2. Browser doesn't support MP4
3. Video file corrupted

**Solutions**:
1. Verify path: `/assets/video/banner_video.mp4`
2. Check browser console for errors
3. Replace video file

### Video Not Autoplaying
**Possible Causes**:
1. Missing `muted` attribute
2. Browser autoplay policy
3. Video not visible

**Solutions**:
1. Ensure `muted` attribute is present
2. Check browser autoplay settings
3. Verify video is in viewport

### Video Distorted
**Possible Causes**:
1. Wrong aspect ratio
2. `object-fit` not working
3. Container size issue

**Solutions**:
1. Check video dimensions
2. Verify `object-fit: cover` is applied
3. Check container height

---

## Maintenance

### To Update Video
1. Replace `public/assets/video/banner_video.mp4`
2. Ensure new video is MP4 format
3. Run `npm run build`
4. Deploy changes

### To Modify Autoplay Behavior
Edit `src/app/Components/HeroSection/HeroSection1.jsx`:
- Remove `autoPlay` to disable autoplay
- Remove `loop` to play once
- Remove `muted` to enable audio (breaks autoplay)
- Remove `playsInline` for fullscreen on mobile

### To Add Video Controls
Edit `src/app/Components/HeroSection/HeroSection1.jsx`:
```jsx
<video
  className="cs_hero_video"
  autoPlay
  loop
  muted
  playsInline
  controls    <!-- Add this -->
>
```

---

## Summary

✅ **Hero section video is properly implemented with**:
- Correct file location and format
- Proper HTML5 video element
- Correct autoplay attributes
- Proper CSS positioning and layering
- Responsive design
- Cross-browser compatibility
- Performance optimization
- Fallback handling

**Status**: Production Ready ✅

