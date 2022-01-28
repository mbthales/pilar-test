<script>
import axios from "axios";
import CardHouse from "./CardHouse.vue";
import LoadingTarget from "./LoadingTarget.vue";

export default {
  components: {
    CardHouse,
    LoadingTarget,
  },
  data() {
    return {
      houses: {
        data: [],
        error: null,
        loading: false,
      },
      housesLimit: 10,
      housesOrder: "max",
      inputSearchHouse: "",
      inputSearchHouseFocused: false,
      housesFound: [],
    };
  },
  methods: {
    removeStringAccent(string) {
      return string
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase();
    },
    filterHouses() {
      const searchedHouse = this.removeStringAccent(this.inputSearchHouse);

      this.houses.data.sort((a, b) =>
        this.housesOrder === "min"
          ? a.asking_price - b.asking_price
          : this.housesOrder === "max" && b.asking_price - a.asking_price
      );

      const houses = this.houses.data.filter((house) => {
        const houseAddress =
          house.address && this.removeStringAccent(house.address);
        const houseName =
          house.building && this.removeStringAccent(house.building);
        const houseRegion =
          house.region && this.removeStringAccent(house.region);

        const searchMatchHouseAddress = houseAddress?.includes(searchedHouse);
        const searchMatchHouseName = houseName?.includes(searchedHouse);
        const searchMatchHouseRegion = houseRegion?.includes(searchedHouse);

        return (
          searchMatchHouseAddress ||
          searchMatchHouseName ||
          searchMatchHouseRegion
        );
      });

      this.housesFound = houses;
    },
    checkIfInputSearchHouseHasFocus() {
      this.inputSearchHouseFocused = !this.inputSearchHouseFocused;
    },
    getHouses() {
      const url = "https://development-api.blintz.com.br/properties";
      this.houses.loading = true;

      axios
        .get(url)
        .then((response) => {
          this.houses.data = response.data;
          this.housesFound = response.data;
        })
        .catch((error) => {
          this.houses.error = error.message;
        })
        .finally(() => {
          this.houses.loading = false;
        });
    },
    setHousesLimit() {
      const viewport = window.innerWidth;

      if (viewport >= 2560) {
        this.housesLimit = 30;
      }
    },
    showMoreHouses() {
      const target = document.getElementById("loading-target");

      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setTimeout(() => {
            this.housesLimit += 10;
          }, 1000);
        }
      });

      observer.observe(target);
    },
  },
  watch: {
    housesOrder() {
      this.filterHouses();
    },
    inputSearchHouse() {
      this.filterHouses();
    },
  },
  computed: {
    housesShown() {
      return this.housesFound.slice(0, this.housesLimit);
    },
  },
  created() {
    this.setHousesLimit();
    this.getHouses();
  },
};
</script>

<template>
  <main class="main-content">
    <form class="form-house">
      <label>
        <span class="screenreader">Procure por imóveis</span>
        <input
          class="input-search-house"
          placeholder="Localização do imóvel "
          type="text"
          v-model="inputSearchHouse"
          id="LoadingTarget"
          @focus="checkIfInputSearchHouseHasFocus"
          @blur="checkIfInputSearchHouseHasFocus"
        />
        <font-awesome-icon
          :class="
            inputSearchHouseFocused
              ? 'icon-search-house-focused'
              : 'icon-search-house'
          "
          :icon="['fas', 'search']"
        />
      </label>
      <label>
        <span class="screenreader">Ordene os imoveis</span>
        <select class="select-sort-house" v-model="housesOrder">
          <option value="max">Preço mais caro</option>
          <option value="min">Preço mais barato</option>
        </select>
      </label>
    </form>
    <div class="container" v-if="!houses.loading">
      <div class="container-exception" v-if="houses.error">
        <p>Erro: {{ houses.error }}</p>
      </div>
      <div v-else>
        <div>
          <div class="container-houses" v-if="housesShown.length > 0">
            <CardHouse
              v-for="(house, index) in housesShown"
              :key="index"
              :house="house"
            />
          </div>
          <div class="container-exception" v-else>
            <p>Imóvel não encontrado</p>
          </div>
        </div>
        <div
          v-if="
            housesShown.length >= housesLimit &&
            housesShown.length < housesFound.length
          "
          class="loading-houses"
        >
          <LoadingTarget @mounted="showMoreHouses" />
        </div>
      </div>
    </div>
    <div class="container-exception" v-else>
      <font-awesome-icon :icon="['fas', 'spinner']" spin />
    </div>
  </main>
</template>

<style>
.main-content {
  flex-grow: 1;
  background-color: var(--color-secundary);
}

.form-house {
  margin: 50px auto;
  justify-content: center;
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
}

.screenreader {
  position: absolute !important; /* Outside the DOM flow */
  height: 1px;
  width: 1px; /* Nearly collapsed */
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE 7+ only support clip without commas */
  clip: rect(1px, 1px, 1px, 1px); /* All other browsers */
}

.icon-search-house,
.icon-search-house-focused {
  font-size: 1rem;
}

.icon-search-house {
  color: var(--color-primary);
}

.icon-search-house-focused {
  color: var(--color-accent);
}

.input-search-house,
.select-sort-house {
  font-family: "Archivo", sans-serif;
  color: var(--color-primary);
  font-size: 0.8rem;
  background-color: transparent;
}

.input-search-house {
  border-bottom: 2px solid var(--color-primary);
}

.input-search-house::-webkit-input-placeholder {
  color: var(--color-primary);
  opacity: 0.5;
}

.input-search-house:focus {
  border-bottom: 2px solid var(--color-accent);
}

.select-sort-house {
  padding: 8px;
  border: 2px solid var(--color-primary);
}

.select-sort-house:focus {
  border-color: var(--color-accent);
}

.button-filter-houses {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-family: "Archivo", sans-serif;
  cursor: pointer;
}

.button-filter-houses:hover,
.button-filter-houses:focus {
  border: 2px solid var(--color-accent);
}

.container {
  position: relative;
}

.container-houses {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
}

.container-exception {
  position: fixed;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 1rem;
}

.loading-houses {
  text-align: center;
  margin: 20px 0;
  font-size: 2.5rem;
}

.container-exception > svg {
  font-size: 2rem;
  color: var(--color-primary);
}
</style>