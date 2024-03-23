<script>
    export let type = 'primary';
    export let inverse = false;
    export let hrefLink = '#';
</script>


<!-- svelte-ignore a11y-invalid-attribute -->
<a href={hrefLink} class={type} class:inverse={inverse}>
  <slot></slot>
</a>

<style>
  /* Basic button styles */
  a {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none; /* Remove underline */
    border: none; /* Remove border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Show pointer cursor on hover */
    min-width: 100px;
    text-align: center;
    font-size: medium;
  }

  .primary {
    background-color: #18A0FB;
    color: #FFF;
  }

  .primary.inverse {
    background-color: #FFF;
    color: #18A0FB;
    border: 2px solid #18A0FB;
  }

  .secondary {
    background-color: #43659D;
    color: #FFF;
  }

  .secondary.inverse {
    background-color: #FFF;
    color: #43659D;
    border: 2px solid #43659D;
  }
</style>