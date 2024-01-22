function Index() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-6 m-4 border-2 border-orange-400">
        <div className="text-center md:text-left">
          <p className="text-xl">Вітаю! Мене звуть,</p>
          <h1 className="text-3xl font-bold my-2">Золотовська Ганна</h1>
          <p className="text-md">
            і я - фронтенд-розробник. Незважаючи на те, що я тільки починаю свій шлях у цій галузі,
            в мене вже є чимало ентузіазму та відданості роботі. Я впевнена, що моя старанність та
            прагнення навчатися дозволять мені бути корисною у вашій команді та внести свій вклад у
            наші спільні проекти.
          </p>
        </div>
        <img
          src="/images/1.jpg"
          alt="Zolotovska Hanna"
          className="w-40 h-50 md:w-52 md:h-62 rounded-full border-4 border-gray-300 mx-4 my-2"
        />
      </div>
    </main>
  );
}

export default Index;






