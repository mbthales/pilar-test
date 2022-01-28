<template>
  <header class="menu">
    <h1 class="menu-section title">BLINTZ</h1>
    <nav class="menu-section">
      <ul class="list-links">
        <li>
          <a class="link-icon" aria-label="Imóveis" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'building']" />
          </a>
        </li>
        <li>
          <a class="link-icon" aria-label="Negocie" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'handshake']" />
          </a>
        </li>
        <li>
          <a class="link-icon" aria-label="Faça uma proposta" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'magic']" />
          </a>
        </li>
        <li>
          <a class="link-icon" aria-label="Imóveis favoritos" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'bell']" />
          </a>
        </li>
        <li>
          <a class="link-icon" aria-label="Configurações" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'cog']" />
          </a>
        </li>
      </ul>
    </nav>
    <nav class="menu-section">
      <ul class="list-links align-y">
        <li class="link-text">Bem vindo, usuário@gmail.com</li>
        <li>
          <a class="link-icon" aria-label="Sair do site" href="#">
            <font-awesome-icon role="link" :icon="['fas', 'sign-out-alt']" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  background-color: var(--color-secundary);
}

.title {
  text-align: center;
  font-size: 1.3rem;
  font-family: "Sora", sans-serif;
}

.menu-section {
  width: 80%;
  max-width: 350px;
}

.list-links {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.link-text {
  font-size: 0.8rem;
  text-align: center;
}

.link-icon {
  color: var(--color-primary);
  font-size: 1rem;
}

.link-icon:hover {
  cursor: pointer;
  color: var(--color-accent);
}

.link-icon:focus {
  color: var(--color-accent);
}
</style>