<template>
  <v-row class="py-8 px-6">
    <v-col cols="12">
      <v-card>
        <v-subheader>Coaches List</v-subheader>
        <v-list two-line v-if="hasCoaches">
          <v-list-item v-for="coach in filteredCoaches" :key="coach.id">
            <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ coach.lastName }} {{ coach.firstName }}</v-list-item-title
              >

              <v-list-item-subtitle>
                {{ coach.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <h3 v-else>No Data Found</h3>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches"];
    },
    hasCoaches() {
      return this.$store.getters["hasCoaches"];
    },
  },
};
</script>

<style></style>
