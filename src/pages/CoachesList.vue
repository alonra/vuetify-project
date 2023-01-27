<template>
  <v-row class="py-8 px-6">
    <v-col cols="12">
      <v-card>
        <v-subheader>Coaches List</v-subheader>
        <v-list two-line>
          <v-list-item v-for="coach in $store.state.coaches" :key="coach.id">
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
