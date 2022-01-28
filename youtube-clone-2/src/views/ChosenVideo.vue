<template>
  <div id="chosenVideo">
    <h1>Chosen video</h1>
  </div>
</template>

<script>
export default {
  name: "ChosenVideo",
  props: ["detailsId"],
};
</script>

<style>
.details {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}
.fas {
  margin-left: 1.5vh;
}

#chosenVideo .card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.01em;
  color: #ffffff;
}

#chosenVideo .card-text {
  font-family: Roboto;
  font-size: 15px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.02em;
  color: #ffffff;
}
</style>
