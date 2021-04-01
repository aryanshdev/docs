<template>
  <section>
    <div class="columns is-multiline">
      <a href="#" @click="run">asdASD</a>
      <!--      <div class="column is-12">-->
      <!--        <b-button-->
      <!--          :loading="loading"-->
      <!--          class="is-pulled-right is-primary"-->
      <!--          @click="run"-->
      <!--          >Run →-->
      <!--        </b-button>-->
      <!--      </div>-->
      <div v-if="result" class="column is-12 pt-0">
        <p class="subtitle mb-0">Result</p>
        <pre class="has-background-white-ter">{{ result }}</pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CounterAPI, CountsQuery, GroupByTypes } from "counterapi";

export default defineComponent({
  name: "APIRun",
  props: {
    type: String
  },
  setup(props) {
    const result = ref(null);
    const loading = ref(false);

    const getQueryFromType = () => {
      const counter = new CounterAPI();
      const counterName = "APITest";

      switch (props.type) {
        case "up":
          return counter.up(counterName);
        case "down":
          return counter.down(counterName);
        case "get":
          return counter.get(counterName);
        case "set":
          return counter.set(counterName, 10);
        case "counts/":
          const q: CountsQuery = {
            name: "APITest",
            group_by: GroupByTypes.Day
          };
          return counter.counts(q);
      }
    };

    const run = () => {
      loading.value = true;
      const counter = getQueryFromType();
      counter
        .then(function(response) {
          result.value = response;
        })
        .then(() => {
          loading.value = false;
        });
    };
    return {
      loading,
      result,
      run
    };
  }
});
</script>
