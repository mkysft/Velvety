module.exports = (componentName) => ({
  content: `const ${componentName}Animation = {
    initial: {},
    animate: {},
    exit: {},
};

export default ${componentName}Animation;
  `,
  extension: `.anim.tsx`,
});
