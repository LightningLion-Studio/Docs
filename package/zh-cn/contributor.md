<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://s1.ax1x.com/2022/11/04/xOC0sg.jpg',
    name: '闪电狮',
    title: '腕上系列开发者',
  },
  {
    avatar: 'https://s1.ax1x.com/2022/11/04/xOP1pV.jpg',
    name: 'Zero',
    title: '心电社区开发者',
    links: [
      { icon: 'github', link: 'https://github.com/groupguanfang' },
    ]
  },
]
</script>

# 贡献

<VPTeamMembers size="small" :members="members" />
