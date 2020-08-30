<template>
    <my-page title="云设" :page="page">
        <div class="common-container container">
            <!-- <div class="notice">
                <div class="title">公告</div>
                <div class="content">最近 CDN 不稳定，可能会导致很多网站无法访问，敬请见谅。</div>
            </div> -->
            <app-list :data="groups" />
            <div class="icp">
                <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备17154000号</a>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '推荐',
                        apps: [
                            {
                                name: '应用',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/app.png',
                                to: 'xxx',
                                href: 'https://app.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '服务',
                        apps: [
                            {
                                href: 'https://account.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/account.svg',
                                name: '账号',
                                description: '',
                            },
                            {
                                href: 'https://search.yunser.com',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/search.svg',
                                name: '搜索',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                href: 'https://message.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/hub.svg',
                                name: '消息',
                                description: '',
                            },
                            {
                                href: 'https://feedback.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/feedback.svg',
                                name: '意见反馈',
                                description: '对云设工具有什么意见，在这里留言',
                            },
                        ]
                    },
                    {
                        name: '多平台',
                        apps: [
                            {
                                to: 'xxx',
                                href: 'https://extension.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/extension.png',
                                name: '超级拓展',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                to: 'xxx',
                                href: 'https://pc.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/tool.png',
                                name: '超级工具',
                                description: '',
                            },
                            {
                                to: 'xxx',
                                href: 'https://client.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/client.png',
                                name: '客户端',
                                description: '',
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                href: 'https://help.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/help.png',
                                // icon: 'https://help.yunser.com/static/img/help.png',
                                name: '帮助',
                                description: '',
                            },
                            {
                                href: 'https://about.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/about.png',
                                name: '关于',
                                description: '',
                            },
                            

                            {
                                href: 'https://open.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/open.png',
                                name: '开放平台',
                                description: '',
                            },
                            {
                                href: 'https://lab.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/edu.svg',
                                name: '实验室',
                                description: '',
                            },
                            {
                                href: 'https://policy.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/policy.svg',
                                name: '隐私政策',
                                description: '',
                            },
                            {
                                href: 'https://pay.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/pay.svg',
                                name: '支付',
                                description: '',
                            },
                            {
                                href: 'https://setting.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/setting.png',
                                name: '设置',
                                description: '',
                            },
                        ]
                    },
                    // {
                    //     name: '效率',
                    //     apps: [
                    //         {
                    //             name: '网址导航',
                    //             desc: '',
                    //             icon: '/static/img/nav.svg',
                    //             to: 'xxx',
                    //             href: 'https://nav.yunser.com/',
                    //             target: '_blank'
                    //         },
                    //     ]
                    // },
                    // {
                    //     name: '其他',
                    //     apps: [
                    //         {
                    //             name: 'UI',
                    //             desc: '',
                    //             icon: '/static/img/ui.svg',
                    //             to: 'xxx',
                    //             href: 'https://ui.yunser.com/',
                    //             target: '_blank'
                    //         },
                    //     ]
                    // },
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=yunser',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'message',
                            href: 'https://message.yunser.com?utm_source=yunser',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=yunser',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.notice {
    max-width: 480px;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
    .title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 8px;
    }
    .content {
        color: #666;
    }
}
.icp {
    margin-top: 80px;
    text-align: center;
}
</style>
