<template>
  <div>
    <div class="page-header">
      <h1>About Me</h1>
    </div>

    <div class="content-row">
      <div class="image">
        <img src="/images/6.jpg" alt="Image" />
      </div>
      <div class="text">
        <h1>About Me</h1>
        <p>{{ paragraphOne }}</p>
        <p>{{ paragraphTwo }}</p>
        <p>{{ paragraphThree }}</p>
        <p>{{ paragraphFour }}</p>
        <p>{{ paragraphFive }}</p>
        <p>{{ paragraphSix }}</p>
        <p>{{ paragraphSeven }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paragraphOne: '',
      paragraphTwo: '',
      paragraphThree: '',
      paragraphFour: '',
      paragraphFive: '',
      paragraphSix: '',
      paragraphSeven: '',
      isLoading: true,
    }
  },
  methods: {
    async fetchAboutParagraphs() {
      try {
        const response = await fetch('/about.json')
        if (!response.ok)
          throw new Error('Failed to fetch about paragraphs data')
        const aboutData = await response.json()
        // Assign paragraphs to string variables
        this.paragraphOne = aboutData[0].one
        this.paragraphTwo = aboutData[0].due
        this.paragraphThree = aboutData[0].tre
        this.paragraphFour = aboutData[0].quattro
        this.paragraphFive = aboutData[0].cinque
        this.paragraphSix = aboutData[0].sei
        this.paragraphSeven = aboutData[0].sette
        this.isLoading = false
        console.log('Fetched about paragraphs:', aboutData)
      } catch (error) {
        console.error(
          'An error occurred while fetching about paragraphs data:',
          error
        )
      }
    },
  },
  mounted() {
    this.fetchAboutParagraphs()
  },
}
</script>

<style scoped>
.page-header {
  height: 40vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: url(/images/2.jpg);
  background-size: cover;
  background-position: center;
}

.page-header h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  height: 100%;
}

.content-row {
  height: 120vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  color: #212121;
}

.image {
  flex: 1;
  padding: 1rem;
  background-color: var(--white);
  text-align: center;
}

.image img {
  max-width: 100%;
  box-shadow: 3px 4px 8px var(--shadow);
  border-radius: 5px;
}

.text {
  flex: 2;
  padding: 1rem 3rem;
  background-color: var(--white);
  text-align: justify;
  line-height: 1.3;
}

.text h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
}

.text p {
  margin-bottom: 1rem;
  font-size: 1.4rem;
  padding: 0 2rem;
}
</style>
