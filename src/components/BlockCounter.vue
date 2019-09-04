<template>
  <div class="block-count-class">
    <h1>Block: {{count}}</h1>
  </div>
</template>

<script lang="ts">
import { instance as contractsService } from '../neo-one/vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'TestComponent',
  data: function() {
    return {
      count: 0,
    };
  },
  created: function() {
    contractsService.client.block$.subscribe((block: any) => {
      this.count = block.block.index;
    });
  },
});
</script>