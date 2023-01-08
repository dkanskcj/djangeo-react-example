import { LinkButton, PrimaryButton } from "@styles/tw/button"

const ButtonPreview = () => {
  return (
    <div>
      <h1>ButtonPreview</h1>
      <section className="flex-wrap">
        <PrimaryButton>Primary</PrimaryButton>
        <LinkButton>Link</LinkButton>
      </section>
    </div>
  )
}

export default ButtonPreview