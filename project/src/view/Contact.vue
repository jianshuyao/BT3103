<template>
  <div>
    <h1>Contact Us</h1>
  <p>
    <ul>
      <li>Name: {{name}}</li>
      <li>Email: {{email}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      name: 'JSY',
      email: 'jianshuyao@u.nus.edu'
    }
  }
}
</script>