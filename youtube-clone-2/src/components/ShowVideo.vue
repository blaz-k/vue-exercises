<template>
  <div v-if="videoData">
    <div>
      <router-link
        :to="{ name: 'ChosenVideo', params: { detailsId: showVideoId } }"
      >
        <!-- <div v-if="this.sidebar" id="sidebar">
          <div class="row g-0">
            <div class="col-lg-6">
              <img
                :src="videoData.items[0].snippet.thumbnails.maxres.url"
                class="img-fluid rounded-start"
                alt="..."
              />
              <p class="card-text">
                <span class="cardName">
                  <p>views Views</p>
                  <p>correct data</p></span
                >
              </p>
            </div>
            <div class="col-lg-6 bottom">
              <div class="card-body">
                <div class="card-title">
                  title substring
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div>
          <div class="my-card">
            <div class="card" style="">
              <div class="card h-100">
                <img
                  :src="videoData.items[0].snippet.thumbnails.maxres.url"
                  class="card-img-top my-img"
                  alt="..."
                />

                <div class="card-body">
                  <h5 class="card-title">
                    {{
                      videoData.items[0].snippet.localized.title.substring(
                        0,
                        45
                      )
                    }}
                  </h5>
                  <p class="card-text">
                    <span class="cardName">
                      <p>{{ videoData.items[0].statistics.viewCount }} views</p>
                      <p>data changed</p></span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "ShowVideo",
  props: ["showVideoId"],

  setup(props) {
    const url = ref("https://www.googleapis.com/youtube/v3/videos?id=");
    const apiKey = ref("AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14");
    const endUrl = ref("&part=snippet,contentDetails,statistics,status");
    const videoData = ref(null);

    onMounted(async () => {
      const result = await axios.get(
        `${url.value}${props.showVideoId}&key=${apiKey.value}${endUrl.value}`
      );
      videoData.value = result.data;
      console.log(videoData.value);
    });

    return { url, apiKey, endUrl, videoData };
  },
};
</script>

<style></style>
