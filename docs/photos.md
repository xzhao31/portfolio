---
layout: doc
---

<script setup>
  const arizona_images = import.meta.glob('/public/arizona/*.{png,jpg,jpeg}', { eager: true });
  const arizona_imageUrls = Object.values(arizona_images).map(module => module.default);

  const boston_images = import.meta.glob('/public/boston/*.{png,jpg,jpeg}', { eager: true });
  const boston_imageUrls = Object.values(boston_images).map(module => module.default);

  const portugal_images = import.meta.glob('/public/portugal/*.{png,jpg,jpeg}', { eager: true });
  const portugal_imageUrls = Object.values(portugal_images).map(module => module.default);

  const arkansas_images = import.meta.glob('/public/arkansas/*.{png,jpg,jpeg}', { eager: true });
  const arkansas_imageUrls = Object.values(arkansas_images).map(module => module.default);

  const california_images = import.meta.glob('/public/california/*.{png,jpg,jpeg}', { eager: true });
  const california_imageUrls = Object.values(california_images).map(module => module.default);

  const nola_images = import.meta.glob('/public/nola/*.{png,jpg,jpeg}', { eager: true });
  const nola_imageUrls = Object.values(nola_images).map(module => module.default);
</script>

# Photography
I am not a professional!! These are shot on Nikon S550 and Sony a6100.

## Arizona
Where I lived for 15 years of my life (2006-2021).
<div class="gallery-container">
  <img v-for="(url, index) in arizona_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

## Boston
Having been at MIT for four years, I have accumulated some pictures around the greater Boston area.
<div class="gallery-container">
  <img v-for="(url, index) in boston_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

## Portugal
I visited Lisboa and Porto for a week in January 2024.
<div class="gallery-container">
  <img v-for="(url, index) in portugal_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

## Arkansas
Mainly in the northwest Arkansas area where Walmart headquarters are (my first job!)
<div class="gallery-container">
  <img v-for="(url, index) in arkansas_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

## California
My family often (every few years) takes road trips to California. It's only a 5-6 hour drive for us, and it's well worth it.
<div class="gallery-container">
  <img v-for="(url, index) in california_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

## New Orleans
A spring break trip with my friends in March 2025. It is a city of so much cultue, and one I hope to visit again someday!
<div class="gallery-container">
  <img v-for="(url, index) in nola_imageUrls" :key="index" :src="url" class="gallery-image">
</div>

<style>
.gallery-container {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem; */
  column-count: 2;
  column-gap: 10px;
}

.gallery-image {
 display: inline-block;
 width: 100%;
 margin-top: 1px;
 margin-bottom: 1px;
}

.gallery-image img {
 display:block;
 width: 100%;
}

</style>