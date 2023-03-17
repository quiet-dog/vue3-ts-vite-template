<script setup lang="ts">
import { useRouter, type Router, type RouteMeta } from "vue-router";
const route = useRoute();
let Breadcrumb = $ref<
  {
    path: string;
    meta: RouteMeta;
  }[]
>([]);
// 监听路由变化，当路由发生改变时添加导航
watch(
  () => route.path,
  (cur) => {
    const i = Breadcrumb.findIndex((item) => item.path == cur);
    if (i === -1) {
      Breadcrumb.unshift({ path: cur, meta: route.meta });
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
// 点击关闭
const router: Router = useRouter()
console.log(router);

const close = (path: string) => {
  if (Breadcrumb.length === 1) return
  const i = Breadcrumb.findIndex((item) => item.path == path)
  Breadcrumb.splice(i, 1)
  if (i !==0) {
    router.push(Breadcrumb[i-1].path)
  }else{
    router.push(Breadcrumb[i].path)
  }


}
// 判断是当前路由
const color = computed(() => (item: any) => {
  return item.path == route.path ? '#4F78FF' : '#4e5969'
})
</script>

<template>
  <div class="tabs">
    <ABreadcrumb separator="|">
      <ABreadcrumbItem v-for="item in Breadcrumb">
        <router-link :to="item.path">
          <div :class="{ active: route.path == item.path }">
            <IconSvg :iconClass="String(item.meta?.icon)" :color="color(item)" />
            <span>
              {{ item.meta.title }}
            </span>
            <i v-if="route.path == item.path" @click.prevent.stop="close(item.path)">
              <icon-close />
            </i>

          </div>
        </router-link>



      </ABreadcrumbItem>
    </ABreadcrumb>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
  height: 40px;
  background: #fff;
  margin: 16px 0 16px 16px;
  display: flex;
  align-items: center;
  padding: 0 12px;

  :deep(.arco-breadcrumb) {
    .arco-breadcrumb-item {
      color: #4e5969;

      a {
        &:hover {
          background: transparent;
        }

        span {
          margin-left: 9px;
          margin-right: 15px;
        }

        .icon {
          width: 14px;
          height: 14px;
          color: #000;
        }

        .active {
          display: flex;
          align-items: center;
          color: #4F78FF;
        }
      }

    }
  }
}
</style>
