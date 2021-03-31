<template>
  <section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <b-button
          :loading="loading"
          class="is-pulled-right is-primary"
          @click="run"
          >Run →
        </b-button>
      </div>
      <div v-if="result" class="column is-12 pt-0">
        <p class="subtitle mb-0">Result</p>
        <pre class="has-background-white-ter">{{ result }}</pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AxiosRequestConfig } from "axios";

let axios = require("axios");

const BASE_URL = "https://api.counterapi.dev/v1/";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: false,
  timeout: 30000,
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }
};

axios = axios.create(apiConfig);

export default defineComponent({
  props: {
    type: String
  },
  setup(props) {
    const result = ref(null);
    const loading = ref(false);

    const getQueryFromType = () => {
      switch (props.type) {
        case "up":
          return {
            name: "APITest"
          };
        case "down":
          return {
            name: "APITest"
          };
        case "get":
          return {
            name: "APITest"
          };
        case "set":
          return {
            name: "APITest",
            count: 10
          };
        case "counts/":
          return {
            name: "APITest",
            group_by: "days"
          };
      }
    };

    const run = () => {
      loading.value = true;
      const query = getQueryFromType();
      axios
        .get(props.type, {
          params: query
        })
        .then(function(response) {
          result.value = response.data;
        })
        .then(() => {
          loading.value = false;
          setTimeout(function() {
            result.value = null;
          }, 8000);
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
