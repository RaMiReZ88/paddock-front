<template>

  <div class="navbar">
    <ul class="navbar-list">
      <li>
        <span class="navbar-item">Новости</span>
      </li>
      <li>
        <span class="navbar-item">Турниры</span>
      </li>
      <li>
        <span class="navbar-item">Развлечения</span>
      </li>
      <li>
        <span class="navbar-item">Поддержка</span>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "Navbar"
}

</script>

<style scoped>

  * {
    font-family: "Tlwg Typo", serif;
    font-size: 18px;
  }

  body {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  .navbar {
    width: 1200px;
    height: 60px;
    margin: 0 auto auto;
    background-color: #42b983;
  }

  .navbar-list {
    margin: 5px auto auto;
    width: 1000px;
    height: 40px;
  }

  .navbar-list li {
    float: left;
    width: 250px;
    height: 40px;
    background-color: #2c3e50;
    color: aliceblue;
  }

  .navbar-list li:hover {
    background-color: slategrey;
  }

  .navbar-list .navbar-item {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }

</style>