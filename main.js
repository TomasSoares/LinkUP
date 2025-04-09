// Theme definitions
const themes = {
    dark: {
        body: 'background: #121212;',
        container: `
        background: rgba(30, 30, 30, 0.7);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `,
        profilePic: `
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.2);
      `,
        h1: `
        color: #ffffff;
      `,
        p: `
        color: rgba(255, 255, 255, 0.7);
      `,
        link: `
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `,
        linkBefore: `
        background: linear-gradient(135deg, #555555, #333333);
      `,
        linkHover: `
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.25);
      `,
        linkActive: `
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      `
    },

    teal: {
        body: 'background: linear-gradient(135deg, #00425A, #1F8A70, #BFDB38);',
        container: `
        background: rgba(0, 66, 90, 0.7);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `,
        profilePic: `
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.2);
      `,
        h1: `
        background: linear-gradient(to right, #FC7300, #BFDB38);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `,
        p: `
        color: rgba(255, 255, 255, 0.85);
      `,
        link: `
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `,
        linkBefore: `
        background: linear-gradient(135deg, #FC7300, #BFDB38);
      `,
        linkHover: `
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.25);
      `,
        linkActive: `
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      `
    },

    sunset: {
        body: 'background: linear-gradient(135deg, #FF5F6D, #FFC371);',
        container: `
        background: rgba(51, 10, 20, 0.6);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `,
        profilePic: `
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.2);
      `,
        h1: `
        background: linear-gradient(to right, #FFC371, #FF5F6D);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `,
        p: `
        color: rgba(255, 255, 255, 0.85);
      `,
        link: `
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `,
        linkBefore: `
        background: linear-gradient(135deg, #FF5F6D, #FFC371);
      `,
        linkHover: `
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.25);
      `,
        linkActive: `
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      `
    },

    mint: {
        body: 'background: linear-gradient(135deg, #184E77, #1A759F, #34A0A4);',
        container: `
        background: rgba(24, 78, 119, 0.7);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `,
        profilePic: `
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.2);
      `,
        h1: `
        background: linear-gradient(to right, #76C893, #B5E48C);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `,
        p: `
        color: rgba(255, 255, 255, 0.85);
      `,
        link: `
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `,
        linkBefore: `
        background: linear-gradient(135deg, #76C893, #B5E48C);
      `,
        linkHover: `
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.25);
      `,
        linkActive: `
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      `
    },

    pink: {
        body: 'background: linear-gradient(135deg, #3A0CA3, #7209B7, #F72585);',
        container: `
        background: rgba(58, 12, 163, 0.6);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `,
        profilePic: `
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.2);
      `,
        h1: `
        background: linear-gradient(to right, #F72585, #4CC9F0);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `,
        p: `
        color: rgba(255, 255, 255, 0.85);
      `,
        link: `
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      `,
        linkBefore: `
        background: linear-gradient(135deg, #F72585, #4CC9F0);
      `,
        linkHover: `
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.25);
      `,
        linkActive: `
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      `
    }
};

// Set theme function
function setTheme(themeName) {
    // Update active theme indicator
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
    });
    document.getElementById(`${themeName}-theme`).classList.add('active');

    // Apply theme styles
    const theme = themes[themeName];
    const styleElement = document.getElementById('themeStyles');

    styleElement.innerHTML = `
      body {
        ${theme.body}
      }
      .container {
        ${theme.container}
      }
      .profile-pic {
        ${theme.profilePic}
      }
      .profile h1 {
        ${theme.h1}
      }
      .profile p {
        ${theme.p}
      }
      .link {
        ${theme.link}
      }
      .link::before {
        ${theme.linkBefore}
      }
      .link:hover {
        ${theme.linkHover}
      }
      .link:active {
        ${theme.linkActive}
      }
    `;
}

// Set default theme on load
document.addEventListener('DOMContentLoaded', () => {
    setTheme('dark');
});