<template>
  <div class="useful-links-section">
    <h1 class="useful-links__heading">IELTS</h1>
    <div class="container__heading">
      <h2>Links</h2>
      <a-divider />
    </div>
    <div class="useful-links__container">
      <p class="useful-links__text">
        <a-icon type="info" />
        IELTS Practise Tests
      </p>
      <a
        href="https://ieltsonlinetests.com/ielts-exam-library"
        class="useful-links__link"
        target="_blank"
      >
        Go
      </a>
    </div>
    <a-divider />
    <div class="useful-links__container">
      <p class="useful-links__text">
        <a-icon type="info" />
        IELTS Listening Tips (YouTube)
      </p>
      <a
        href="https://www.youtube.com/watch?v=VExCSkDBHDA&list=PLGHMg8AQ02x1h1GBNIy4b9f67wW53Gcf5"
        class="useful-links__link"
        target="_blank"
      >
        Go
      </a>
    </div>
    <a-divider />
    <div class="useful-links__container">
      <p class="useful-links__text">
        <a-icon type="info" />
        IELTS Writing Tips (YouTube)
      </p>
      <a
        href="https://www.youtube.com/watch?v=rUx1HyEmga4&list=PLGHMg8AQ02x3xXAn2KXJfFNib7eNP4qWG"
        class="useful-links__link"
        target="_blank"
      >
        Go
      </a>
    </div>
    <a-divider />
    <div class="useful-links__container">
      <p class="useful-links__text">
        <a-icon type="info" />
        IELTS Reading Tips (YouTube)
      </p>
      <a
        href="https://www.youtube.com/watch?v=ELGrKUR0EH4&list=PLGHMg8AQ02x0dyXD2uysn4tp-znlFhiSN"
        class="useful-links__link"
        target="_blank"
      >
        Go
      </a>
    </div>
    <a-divider />
    <div class="useful-links__container">
      <p class="useful-links__text">
        <a-icon type="info" />
        IELTS Speaking Tips (YouTube)
      </p>
      <a
        href="https://www.youtube.com/watch?v=Qx6nv-z0nbU&list=PLGHMg8AQ02x1ErPUMjxa9De0OBnzoSfmk"
        class="useful-links__link"
        target="_blank"
      >
        Go
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.useful-links-section {
  width: 60%;
  height: 80vh;
  display: block;
  padding: 30px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
}
.useful-links__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.useful-links__text {
  font-size: 18px;
  margin-bottom: 0;
}
.useful-links__link {
  height: 40px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fa5059;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  transition: 300ms;
  /* margin-bottom: 15px; */
}
.useful-links__link:hover {
  background-color: #ff7a7d;
}
</style>
