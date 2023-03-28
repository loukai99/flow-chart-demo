export const tools = [
  {
    type: 'drag',
    icon: 'drag',
    name: '拖拽'
  },
  {
    type: 'connection',
    icon: 'minus',
    name: '连线-实线'
  },
  {
    type: 'connection-dash',
    icon: 'dash',
    name: '连线-虚线'
  },
  {
    type: 'zoom-in',
    icon: 'zoom-in',
    name: '放大'
  },
  {
    type: 'zoom-out',
    icon: 'zoom-out',
    name: '缩小'
  }
];

export const commonNodes = [
  {
    type: 'common',
    nodeName: '樱桃树',
    image: '../../../../../static/images/tree.png'
  },
  {
    type: 'common',
    nodeName: '网关',
    image: '../../../../../static/images/gateway.png'
  },
  {
    type: 'common',
    nodeName: '云服务',
    image: '../../../../../static/images/cloud.png'
  }
  // {
  //   type: 'start',
  //   nodeName: '开始',
  //   icon: 'StartIcon'
  // },
  // {
  //   type: 'end',
  //   nodeName: '结束',
  //   icon: 'EndIcon'
  // },
  // {
  //   type: 'common',
  //   nodeName: '人工节点',
  //   icon: 'CommonIcon'
  // },
  // {
  //   type: 'freedom',
  //   nodeName: '自动节点',
  //   icon: 'FreedomIcon'
  // },
  // {
  //   type: 'gateway',
  //   nodeName: '网关',
  //   icon: 'GatewayIcon'
  // },
  // {
  //   type: 'event',
  //   nodeName: '事件节点',
  //   icon: 'EventIcon'
  // }
];

export const highNodes = [
  {
    type: 'child-flow',
    nodeName: '子流程',
    icon: 'ChildFlowIcon'
  }
];

export const laneNodes = [
  {
    type: 'x-lane',
    nodeName: '横向大棚',
    icon: 'XLaneIcon'
  },
  {
    type: 'y-lane',
    nodeName: '纵向大棚',
    icon: 'YLaneIcon'
  }
];

export const dataNodes = [
  {
    type: 'baseData',
    nodeName: '基础数据显示',
    icon: '',
    apiType: 'get',
    api: 'https://test.xyz/'
  }
];
