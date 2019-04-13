<template>
    <my-page title="云设" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '推荐',
                        apps: [
                            {
                                name: '在线工具',
                                desc: '',
                                icon: '/static/img/build.svg',
                                to: 'xxx',
                                href: 'https://app.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    }
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
                        // {
                        //     type: 'icon',
                        //     icon: 'apps',
                        //     href: 'https://app.yunser.com/',
                        //     target: '_blank',
                        //     title: '应用'
                        // }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
