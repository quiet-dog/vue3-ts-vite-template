<template>
  <div class="header">
    <div class="search">
      <a-input-search
        placeholder="搜索档案、功能、库房、人员等"
        allow-clear
        search-button
      >
        <template #prefix>
          <icon-search />
        </template>
        <template #button-default>
          <div>
            <span><icon-up /></span>
            <span>K</span>
          </div>
        </template>
      </a-input-search>
    </div>
    <div class="sigin">
      <div class="svg">
        <IconSvg iconClass="icon-email" color="#000000" />
      </div>
      <div class="svg">
        <IconSvg iconClass="icon-setup" color="#000000" />
      </div>
      <div class="avatar">
        <a-avatar
          ><img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        /></a-avatar>
        <a-dropdown position="br" style="margin-top:17px">
          <span class="name">乐乐乐<icon-down/></span>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
          </template>
        </a-dropdown>

        <!-- <icon-down /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search {
    width: 351px;
    height: 35px;
    :deep(.arco-input-outer) {
      display: flex;
      .arco-input-wrapper {
        &:hover {
          background: var(--color-neutral-2);
        }
      }
      .arco-input-focus {
        border-color: transparent;
        background: var(--color-neutral-2);
      }
      .arco-input-prefix {
        padding-right: 6px;
        svg {
          color: #4e5969;
        }
      }
      .arco-btn {
        background: transparent;
        div {
          display: flex;
          span {
            width: 18px;
            height: 18px;
            background: #fff;
            margin-right: 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
            color: #b3b3b3;
            text-align: center;
            box-sizing: border-box;
            font-size: 12px;

            svg {
              width: 11px;
              vertical-align: 0 !important;
            }
          }
        }
      }
    }
  }

  .sigin {
    display: flex;
  }

  .svg {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
    :deep(.icon) {
      width: 20px;
    }
  }
  .avatar {
    display: flex;
    align-items: center;
    :deep(.arco-avatar) {
      width: 32px;
      height: 32px;
    }
    .name {
      margin: 0 0 0 13px;
      color: #4e5969;
      font-size: 14px;
      svg{
        margin-left: 7px;
      }
    }
   
    
  }
}
:deep(.arco-trigger-popup){
      margin-top: 18px;
    }
</style>
