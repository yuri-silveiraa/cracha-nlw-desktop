const links_social_media = {
  github: 'yuri-silveiraa',
  youtube: 'channel/UCCFsUovTrrnWUq2hXu7EfnQ',
  instagram: 'yurii_silveira',
  facebook: 'yuri.silveira.9822',
  twitter: 'Yuri_Silveira1'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_photo.src = data.avatar_url
      user_login.textContent = data.login
    })
}
get_github_profile_infos()
