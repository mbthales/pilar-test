<script>
export default {
  props: {
    house: Object,
  },
  computed: {
    housePrice() {
      return this.house.asking_price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    houseName() {
      return this.house.building
        ? `${this.house.property_type} - ${this.house.building}`
        : `${this.house.property_type}`;
    },
    houseBedroom() {
      return this.house.bedrooms > 1
        ? `${this.house.bedrooms} quartos`
        : `${this.house.bedrooms} quarto`;
    },
    houseSuite() {
      return this.house.suites > 1
        ? `${this.house.suites} suítes`
        : `${this.house.suites} suíte`;
    },
    houseParkSpaceQuantity() {
      if (this.house.parking_spots > 1) {
        return `${this.house.parking_spots} vagas no estacionamento`;
      } else if (this.house.parking_spots === 1) {
        return `${this.house.parking_spots} vaga no estacionamento`;
      } else {
        return `Não há vagas no estacionamento`;
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <h1 class="card-important">{{ house.address }}</h1>
    <div>
      <p>{{ house.region }}</p>
      <p>{{ houseName }}</p>
    </div>
    <h2 class="card-important">{{ housePrice }}</h2>
    <div>
      <p>{{ houseBedroom }}</p>
      <p>{{ houseSuite }}</p>
      <p>{{ houseParkSpaceQuantity }}</p>
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  height: 400px;
  padding: 20px;
  text-align: center;
  color: white;
  background-color: var(--color-primary);
  font-size: 0.8rem;
}

.card:hover {
  border: 5px solid var(--color-accent);
}

.card-important {
  margin: 25px 0;
  font-size: 1rem;
  font-weight: bold;
}
</style>