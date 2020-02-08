<template>
    <my-page title="云设" :page="page">
        <div class="common-container container">
            <div class="notice">
                <div class="title">公告</div>
                <div class="content">最近 CDN 不稳定，可能会导致很多网站无法访问，敬请见谅。</div>
            </div>
            <app-list :data="groups" />
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
                                icon: 'https://icons.yunser.com/icons/app.svg',
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
                                icon: 'https://icons.yunser.com/icons/extension.svg',
                                name: '超级拓展',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                to: 'xxx',
                                href: 'https://pc.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                name: '超级工具',
                                description: '',
                            },
                            {
                                to: 'xxx',
                                href: 'https://client.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                name: '客户端',
                                description: '',
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                href: 'https://about.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/about.svg',
                                name: '关于',
                                description: '',
                            },
                            {
                                href: 'https://donation.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/donate.svg',
                                name: '捐赠',
                                description: '',
                            },

                            {
                                href: 'https://open.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
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
                                href: 'https://team.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/team.svg',
                                name: '团队',
                                description: '',
                            },
                            {
                                href: 'https://software.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/about.svg',
                                name: '源码&定制',
                                description: '',
                            },
                            {
                                href: 'https://shop.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/shop.svg',
                                name: '购物',
                                description: '',
                            },
                            {
                                href: 'https://policy.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/about.svg',
                                name: '隐私政策',
                                description: '',
                            },
                            {
                                href: 'https://pay.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                name: '支付',
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
</style>
