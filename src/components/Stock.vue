<template>
  <div>
    <!-- Stock Header -->
    <div class="page-header">
      <h1>Stock</h1>
    </div>
    <div class="products">
      <h1 class="title">Our Products</h1>
      <p class="description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium dolorem que laudantium, totam rem aperiam.
      </p>
      <div class="product-list">
        <div
          class="product-item"
          v-for="(product, index) in products"
          :key="product.id"
          @click="openModal(product)"
        >
          <img src="/images/logo.png" alt="Summer Sandals" />
          <div class="price">$58.00</div>
          <div class="name">SUMMER SANDALS</div>
        </div>
        <div class="product-item sale">
          <img src="/images/logo.png" alt="Pink Dress" />
          <div class="price">
            <span class="original-price">$89.00</span> $45.00
          </div>
          <div class="name">PINK DRESS</div>
        </div>
        <div class="product-item">
          <img src="/images/logo.png" alt="Cotton Dress" />
          <div class="price">$70.00</div>
          <div class="name">COTTON DRESS</div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="overlay" @click="showModal = false"></div>
    <div v-if="showModal" class="modal">
      <!-- Modal content here -->
      <button @click="showModal = false">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      products: [
        {
          id: 1,
          name: 'Summer Sandals',
          image: '/images/sandals.jpg', // Path to the image file
          price: 58.0,
          category: 'Footwear',
        },
        {
          id: 2,
          name: 'Pink Dress',
          image: '/images/pink-dress.jpg', // Path to the image file
          price: 45.0,
          originalPrice: 89.0,
          category: 'Dresses',
          onSale: true,
        },
        {
          id: 3,
          name: 'Cotton Dress',
          image: '/images/cotton-dress.jpg', // Path to the image file
          price: 70.0,
          category: 'Dresses',
        },
      ],
      selectedProduct: null,
    }
  },
  methods: {
    openModal(product) {
      this.selectedProduct = product
      this.showModal = true
    },
  },
}
</script>
<style scoped>
.page-header {
  height: 40vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: url(/images/8.jpg);
}

.page-header h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  height: 100%;
}
.products {
  background-color: #f8f8f8; /* Adjust the background color to match your design */
  padding: 2rem 0; /* Add padding to the top and bottom */
  color: #333; /* Text color */
  text-align: center;
}

.title {
  font-size: 2.5rem; /* Larger font size for the title */
  margin-bottom: 0.5rem; /* Adjust spacing below the title */
}

.description {
  font-size: 1rem; /* Adjust font size for the description */
  color: #555; /* Lighten the text color for the description */
  margin-bottom: 2rem; /* Add space below the description */
}

.product-list {
  display: flex;
  justify-content: space-around;
  align-items: center; /* Vertically align items in the middle */
}

.product-item {
  flex-basis: calc(
    33.333% - 2rem
  ); /* Adjust the width for 3 items, minus margin */
  margin: 1rem; /* Add margin around the items */
  background-color: #fff; /* Background color for the product item */
  padding: 1rem; /* Padding inside the product items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow around the product items */
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
}

.product-item:hover {
  transform: scale(1.03); /* Slight scale on hover for interactivity */
}

.product-item img {
  max-width: 100%; /* Ensure the image takes full width of the container */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 1rem; /* Space below the image */
}

.price {
  font-size: 1.5rem; /* Size of the price text */
  color: #333; /* Color of the price text */
  margin-bottom: 0.25rem; /* Space below the price */
}

.name {
  font-size: 1.25rem; /* Size of the product name */
  text-transform: uppercase; /* Uppercase for the product name */
  color: #333; /* Color of the product name */
}

.original-price {
  font-size: 1rem; /* Size of the original price */
  text-decoration: line-through; /* Strike through the original price */
  color: #777; /* Color for the original price */
  margin-right: 0.5rem; /* Space between the original and sale price */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
