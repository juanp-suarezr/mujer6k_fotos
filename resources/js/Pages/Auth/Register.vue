<template>
  <Head title="Registro" />

  <GuestLayout :isRegister="true">
    <!-- <div class="absolute sm:top-0 top-6 sm:right-[-18%] xl:right-12 xs:left-6">
            <button v-if="isFirstTime" class="w-[15%]" @click="playInfo">
                <PlayCircleIcon class="w-full text-gray-600" />
            </button>
            <button v-if="!isFirstTime && handledAudio" class="w-[15%]">
                <SpeakerWaveIcon class="w-full text-blue-800" />
            </button>
        </div> -->
    <div
      class="flex w-full"
      :class="[isContrast ? '!text-yellow-200 font-bold bg-white' : '']"
    >
      <Link
        href="/"
        class="flex items-center justify-center"
        :class="[isContrast ? 'bg-black' : '']"
      >
        <ApplicationLogo class="w-full sm:w-2/6 fill-current text-gray-500" />
      </Link>

      <!-- <div class="flex items-center justify-center">
                <img :src="logoViveD">
            </div> -->
    </div>

    <form @submit.prevent="submit">
      <div class="mt-6 justify-center" :class="[isContrast ? 'bg-black' : '']">
        <Steps :model="items" v-model:activeStep="active" />
      </div>

      <div class="rounded-xl shadow-xl p-4">
        <!-- Formulario de registro 1 -->
        <div class="justify-center font-medium" v-if="active == 0">
          <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
            <!-- nombres -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="nombres"
                value="Nombres"
              />
              <TextInput
                id="nombres"
                type="text"
                class="mt-1 block w-full p-0 sm:p-2"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.nombres"
                required
                autofocus
                autocomplete="nombre"
              />
              <InputError class="mt-1" :message="form.errors.nombres" />
            </div>
            <!-- apellidos -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="apellidos"
                value="Apellidos"
              />
              <TextInput
                id="apellidos"
                type="text"
                class="mt-1 block w-full p-0 sm:p-2"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.apellidos"
                required
                autocomplete="apellidos"
              />
              <InputError class="mt-1" :message="form.errors.apellidos" />
            </div>

            <!-- edad -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="edad"
                value="Edad"
              />
              <TextInput
                id="edad"
                type="number"
                class="mt-1 p-0 sm:p-2 block w-full"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.edad"
                required
                autocomplete="edad"
              />
              <InputError class="mt-1" :message="form.errors.edad" />
            </div>
            <!-- Identificacion -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : 'sm:text-sm text-xs',
                ]"
                for="identificacion"
                value="identificacion"
              />
              <TextInput
                id="identificacion"
                type="number"
                class="mt-1 block w-full p-0 sm:p-2"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.identificacion"
                autocomplete="identificacion"
              />
              <InputError class="mt-1" :message="form.errors.identificacion" />
            </div>

            <!-- zona o sector -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="sector"
                value="Zona o sector"
              />
              <select
                name="zona"
                id="zona"
                v-model="form.sector"
                class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                ]"
              >
                <option
                  class="text-black text-[9px] sm:text-xs"
                  :class="[
                    isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  ]"
                  value=""
                  disabled
                >
                  Seleccione una zona
                </option>
                <option
                  class="text-black text-[9px] sm:text-xs"
                  :class="[
                    isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  ]"
                  value="Urbana"
                >
                  Urbana
                </option>
                <option
                  class="text-black text-[9px] sm:text-xs"
                  :class="[
                    isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  ]"
                  value="Rural"
                >
                  Rural
                </option>
              </select>

              <InputError class="mt-1" :message="form.errors.sector" />
            </div>
            <!-- Comuna -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="comuna"
                value="Comuna/Corregimiento"
              />
              <Select
                :disabled="!form.sector"
                id="comuna"
                v-model="form.comuna"
                :options="lugaresFiltrados"
                filter
                optionLabel="label"
                placeholder="Seleccione una comuna o corregimiento"
                checkmark
                :highlightOnSelect="false"
                class="block w-full sm:px-4 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                ]"
              />
              <InputError class="mt-1" :message="form.errors.comuna" />
            </div>
            <!-- telefono -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="telefono"
                value="Telefono"
              />
              <TextInput
                id="telefono"
                type="number"
                class="mt-1 block w-full p-0 sm:p-2"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.telefono"
                required
                autofocus
                autocomplete="telefono"
              />
              <InputError class="mt-1" :message="form.errors.telefono" />
            </div>
            <!-- email -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="email"
                value="Correo electronico"
              />
              <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full p-0 sm:p-2"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                ]"
                v-model="form.email"
                autofocus
                autocomplete="username"
              />
              <InputError class="mt-1" :message="form.errors.email" />
            </div>
          </div>

          <!-- botones -->
          <div class="flex pt-4 justify-end">
            <button
              type="button"
              @click="nextStep(1)"
              class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
              :class="[
                letraSize == -2
                  ? '!sm:text-[0.65rem] !text-[0.55rem]'
                  : letraSize == -1
                  ? '!sm:text-xs !text-[0.65rem]'
                  : letraSize == 1
                  ? '!sm:text-lg !text-sm'
                  : letraSize == 2
                  ? '!sm:text-xl !text-base'
                  : '',
              ]"
            >
              Siguiente
            </button>
          </div>
        </div>

        <!-- Formulario de registro 2 -->
        <div class="justify-center font-medium" v-if="active == 1">
          <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
            <!-- genero -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                class="sm:text-sm text-xs"
                for="genero"
                value="Genero"
              />
              <div class="mt-2 block sm:flex">
                <div class="">
                  <input
                    type="radio"
                    id="masculino"
                    value="Masculino"
                    v-model="form.genero"
                  />
                  <label
                    class="ps-2 text-sm sm:text-base"
                    :class="[
                      isContrast ? '!text-yellow-200 font-bold' : '',
                      letraSize == -2
                        ? '!sm:text-xs !text-[0.65rem]'
                        : letraSize == -1
                        ? '!sm:text-sm !text-xs'
                        : letraSize == 1
                        ? '!sm:text-lg !text-base'
                        : letraSize == 2
                        ? '!sm:text-xl !text-lg'
                        : '',
                    ]"
                    for="masculino"
                    >Masculino</label
                  >
                </div>
                <div class="sm:ms-6">
                  <input
                    type="radio"
                    id="two"
                    value="Femenino"
                    v-model="form.genero"
                  />
                  <label
                    class="ps-2 text-sm sm:text-base"
                    :class="[
                      isContrast ? '!text-yellow-200 font-bold' : '',
                      letraSize == -2
                        ? '!sm:text-xs !text-[0.65rem]'
                        : letraSize == -1
                        ? '!sm:text-sm !text-xs'
                        : letraSize == 1
                        ? '!sm:text-lg !text-base'
                        : letraSize == 2
                        ? '!sm:text-xl !text-lg'
                        : '',
                    ]"
                    for="two"
                    >Femenino</label
                  >
                </div>
                <!-- otros generos -->
                <div v-if="IsNewGenero" class="sm:ms-6">
                  <InputLabel
                    :class="[
                      isContrast ? '!text-yellow-200 font-bold' : '',
                      letraSize == -2
                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                        : letraSize == -1
                        ? '!sm:text-xs !text-[0.65rem]'
                        : letraSize == 1
                        ? '!sm:text-lg !text-sm'
                        : letraSize == 2
                        ? '!sm:text-xl !text-base'
                        : '',
                    ]"
                    class="sm:text-sm text-xs"
                    for="genero"
                    value="¿Cual?"
                  />
                  <TextInput
                    id="genero"
                    type="text"
                    class="mt-1 block w-full p-0 sm:p-1"
                    :class="[
                      isContrast ? '!text-yellow-200 font-bold bg-black' : '',
                    ]"
                    v-model="form.genero"
                    autocomplete="genero"
                  />
                  <InputError class="mt-1" :message="form.errors.genero" />
                </div>
                <div v-else class="sm:ms-6">
                  <input
                    type="radio"
                    id="two"
                    value="true"
                    v-model="IsNewGenero"
                  />
                  <label
                    class="ps-2 text-sm sm:text-base"
                    :class="[
                      isContrast ? '!text-yellow-200 font-bold' : '',
                      letraSize == -2
                        ? '!sm:text-xs !text-[0.65rem]'
                        : letraSize == -1
                        ? '!sm:text-sm !text-xs'
                        : letraSize == 1
                        ? '!sm:text-lg !text-base'
                        : letraSize == 2
                        ? '!sm:text-xl !text-lg'
                        : '',
                    ]"
                    for="two"
                    >Otro</label
                  >
                </div>
              </div>
            </div>
            <!-- condicion -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                for="condicion"
                value="Condición"
                class="text-neutral-500 sm:text-sm text-xs"
              />
              <select
                id="condicion"
                name="condicion"
                v-model="form.condicion"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  letraSize == -2
                    ? '!text-[0.65rem]'
                    : letraSize == -1
                    ? '!text-sm'
                    : letraSize == 1
                    ? '!text-lg'
                    : letraSize == 2
                    ? '!text-xl'
                    : '',
                ]"
                class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option
                  class="text-black"
                  :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
                  v-for="con in condiciones"
                  :key="con.id"
                  :value="con.code"
                >
                  {{ con.nombre }}
                </option>
              </select>
              <InputError class="mt-1" :message="form.errors.condicion" />
            </div>
            <!-- etnia -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                for="etnia"
                value="Etnia"
                class="text-neutral-500 sm:text-sm text-xs"
              />
              <select
                id="etnia"
                name="etnia"
                v-model="form.etnia"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  letraSize == -2
                    ? '!text-[0.65rem]'
                    : letraSize == -1
                    ? '!text-sm'
                    : letraSize == 1
                    ? '!text-lg'
                    : letraSize == 2
                    ? '!text-xl'
                    : '',
                ]"
                class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option
                  class="text-black"
                  :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
                  v-for="et in etnias"
                  :key="et.id"
                  :value="et.code"
                >
                  {{ et.nombre }}
                </option>
              </select>
              <InputError class="mt-1" :message="form.errors.etnia" />
            </div>
            <!-- hace parta junta accion comunal -- dignatario -->
            <div class="mb-4 col-span-2">
              <input
                type="checkbox"
                id="juntaAccion"
                name="juntaAccion"
                v-model="form.dignatario"
                :class="[
                  isContrast
                    ? '!text-yellow-200 font-bold bg-black border-yellow-200'
                    : '',
                ]"
              />
              <label
                for="juntaAccion"
                class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == -1
                    ? '!sm:text-sm !text-xs'
                    : letraSize == 1
                    ? '!sm:text-lg !text-base'
                    : letraSize == 2
                    ? '!sm:text-xl !text-lg'
                    : '',
                ]"
                >¿Hace parte de la junta de acción Comunal(JAC) o Junta de
                acción local(JAL)?</label
              >
              <InputError class="mt-1" :message="form.errors.dignatario" />
            </div>
            <!-- nivel estudio -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                for="nivel_estudio"
                value="Nivel de estudio"
                class="text-neutral-500 sm:text-sm text-xs"
              />
              <select
                id="nivel_estudio"
                name="nivel_estudio"
                v-model="form.nivel_estudio"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  letraSize == -2
                    ? '!text-[0.65rem]'
                    : letraSize == -1
                    ? '!text-sm'
                    : letraSize == 1
                    ? '!text-lg'
                    : letraSize == 2
                    ? '!text-xl'
                    : '',
                ]"
                class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option
                  class="text-black"
                  :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
                  v-for="niv in nivel_estudios"
                  :key="niv.id"
                  :value="niv.code"
                >
                  {{ niv.nombre }}
                </option>
              </select>
              <InputError class="mt-1" :message="form.errors.nivel_estudio" />
            </div>

            <!-- Tipo servicios -->
            <div class="mb-4">
              <InputLabel
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
                for="id_evidencia"
                value="Socialización brindada"
                class="text-neutral-500 sm:text-sm text-xs"
              />
              <select
                id="id_evidencia"
                name="id_evidencia"
                v-model="form.id_evidencia"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                  letraSize == -2
                    ? '!text-[0.65rem]'
                    : letraSize == -1
                    ? '!text-sm'
                    : letraSize == 1
                    ? '!text-lg'
                    : letraSize == 2
                    ? '!text-xl'
                    : '',
                ]"
                class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option
                  class="text-black"
                  :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
                  v-for="niv in evidencias"
                  :key="niv.id"
                  :value="niv.id"
                >
                  {{ niv.nombre }}
                </option>
              </select>
              <InputError class="mt-1" :message="form.errors.id_evidencia" />
            </div>

            <!-- ncheck tratamiento datos -->
            <div class="mb-4 col-span-2">
              <input
                type="checkbox"
                id="consentimiento1"
                name="consentimiento1"
                required
                autofocus
                :class="[
                  isContrast
                    ? '!text-yellow-200 font-bold bg-black border-yellow-200'
                    : '',
                ]"
              />
              <label
                for="consentimiento1"
                class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == -1
                    ? '!sm:text-sm !text-xs'
                    : letraSize == 1
                    ? '!sm:text-lg !text-base'
                    : letraSize == 2
                    ? '!sm:text-xl !text-lg'
                    : '',
                ]"
                >Acepto el tratamiento de mis datos personales para fines
                informativos de la Alcaldía de Pereira y la secretaría de las
                TICs</label
              >
              <InputError class="mt-1" :message="form.errors.checked" />
            </div>
          </div>

          <!-- botones -->
          <div class="pt-4 flex justify-between gap-2">
            <div class="flex pt-4 justify-end">
              <button
                type="button"
                @click="prevStep(0)"
                class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
                :class="[
                  isContrast ? '!text-yellow-200 font-bold' : '',
                  letraSize == -2
                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                    : letraSize == -1
                    ? '!sm:text-xs !text-[0.65rem]'
                    : letraSize == 1
                    ? '!sm:text-lg !text-sm'
                    : letraSize == 2
                    ? '!sm:text-xl !text-base'
                    : '',
                ]"
              >
                Atras
              </button>
            </div>
            <div class="flex pt-4 justify-end">
              <PrimaryButton
                class="justify-center !p-2 !mb-0 text-xs sm:text-sm"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
              >
                Enviar
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  </GuestLayout>

  <!-- <audio ref="infoAudio" :src="audioIntro"></audio> -->
</template>

<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm, router, usePage } from "@inertiajs/vue3";
import Steps from "primevue/steps";
import { ref, watch, inject } from "vue";
import Dialog from "primevue/dialog";
import { useToast } from "vue-toast-notification";
import { SpeakerWaveIcon, PlayCircleIcon } from "@heroicons/vue/24/solid";

import axios from "axios";
import { useReCaptcha } from "vue-recaptcha-v3";
import Select from "primevue/select";

import comunas from "@/shared/comunas.json"; // Importa el JSON

const $toast = useToast();
const { executeRecaptcha } = useReCaptcha();
const swal = inject("$swal");

const props = defineProps({
  evidencias: {
    type: Object,
    default: () => ({}),
  },

});

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);
const info_usuario = ref([]);

watch(
  () => usePage().props.accesibilidad.contraste,
  (newVal) => {
    isContrast.value = newVal;
    console.log(isContrast.value);
  }
);

watch(
  () => usePage().props.accesibilidad.letra,
  (newVal) => {
    letraSize.value = newVal;
    console.log(letraSize.value);
  }
);

const form = useForm({
  nombres: "",
  apellidos: "",
  edad: 0,
  tipo_documento: "",
  identificacion: 0,
  comuna: "",
  sector: "",
  telefono: 0,
  email: "",
  genero: "",
  condicion: "NA",
  etnia: "NA",
  nivel_estudio: "",
  codePunto: "",
  checked: "",
  dignatario: false,
  tipo_servicio: "",
  id_evidencia: 0,
  recaptcha_token: "",
});

const lugaresFiltrados = ref([]);

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const fetchUserInfo = debounce((newVal) => {
  if (newVal.length > 6) {
    console.log(newVal);
    axios
      .get("/searchRegistrado", {
        params: {
          identificacion: newVal,
        },
      })
      .then((response) => {
        info_usuario.value = response.data.registrados;
        form.nombres = info_usuario.value
          ? info_usuario.value.nombres
          : form.nombres;
        form.apellidos = info_usuario.value
          ? info_usuario.value.apellidos
          : form.apellidos;
        form.edad = info_usuario.value ? info_usuario.value.edad : form.edad;

        form.sector = info_usuario.value
          ? info_usuario.value.sector
          : form.sector;
        form.comuna = info_usuario.value
          ? getComuna(info_usuario.value.comuna, info_usuario.value.sector)
          : form.comuna;

        form.telefono = info_usuario.value
          ? info_usuario.value.telefono
          : form.telefono;
        form.email = info_usuario.value ? info_usuario.value.email : form.email;
        form.genero = info_usuario.value
          ? info_usuario.value.genero
          : form.genero;
        form.condicion = info_usuario.value
          ? info_usuario.value.condicion
          : "NA";
        form.etnia = info_usuario.value ? info_usuario.value.etnia : "NA";
        form.nivel_estudio = info_usuario.value
          ? info_usuario.value.nivel_estudio
          : form.nivel_estudio;

        form.checked = info_usuario.value ? true : form.checked;
        form.tipo_servicio = info_usuario.value
          ? info_usuario.value.tipo_servicio
          : form.tipo_servicio;
        form.id_evidencia = info_usuario.value
          ? getEvidenciaId(info_usuario.value.id_evidencia)
          : form.id_evidencia;
      })
      .catch((error) => {
        console.error("Error loading:", error);
      });
  }
}, 300); // 300 ms debounce delay

watch(
  () => form.identificacion,
  (newVal) => {
    fetchUserInfo(newVal);
  }
);

// Función para obtener el ID de evidencia basado en el nombre
const getEvidenciaId = (id_evidencia) => {
    const evidencia = props.evidencias.find((e) => e.id === id_evidencia);
    return evidencia ? evidencia : 0; // Devuelve 0 si no se encuentra la evidencia
};

const getComuna = (comuna, sector) => {
    console.log("Buscando comuna:", sector, comuna);
    console.log("Lista de comunas:", comunas);

  // Busca la comuna en el JSON y devuelve su nombre
  const zonaSeleccionada = comunas.find((zona) => zona.zona === sector);
  console.log("Zona seleccionada:", zonaSeleccionada);
    if (!zonaSeleccionada) {
        console.log("Zona no encontrada");
        return "";
    }
  const comunaEncontrada = zonaSeleccionada.lugares.find((c) => c.label === comuna);
  console.log("Comuna encontrada:", comunaEncontrada);

  return comunaEncontrada ? comunaEncontrada : "";
};

// Observa el cambio en la zona seleccionada
watch(
  () => form.sector,
  (nuevaZona) => {
    console.log("Zona seleccionada-watch:", nuevaZona);

    if (nuevaZona) {
      // Filtra los lugares según la zona seleccionada
      const zonaSeleccionada = comunas.find((zona) => zona.zona === nuevaZona);
      lugaresFiltrados.value = zonaSeleccionada ? zonaSeleccionada.lugares : [];
    } else {
      lugaresFiltrados.value = [];
    }
    if (!info_usuario.value) {
      // Si la zona cambia, limpia la comuna
      form.comuna = "";
    }

  }
);

//valida si ya se reprodujo el audio
const isFirstTime = ref(true);

//handled audio
const handledAudio = ref(true);
// referencia al audio intro
const infoAudio = ref(null);

//ITEMS DEL STEP
const items = ref([
  {
    label: "Paso 1",
  },
  {
    label: "Paso 2",
  },
]);


//ITEMS DE CONDICIONES
const condiciones = ref([
  { id: "0", nombre: "Sin condición", code: "NA" },
  { id: "1", nombre: "Persona con discapacidad", code: "discapacitado" },
  { id: "2", nombre: "Desplazados", code: "desplazados" },
  { id: "3", nombre: "Victimas", code: "victimasConfArm" },
  { id: "4", nombre: "Mujer cabeza de hogar", code: "mujerCabHogar" },
  { id: "5", nombre: "Padre cabeza de hogar", code: "hombreCabHogar" },
  { id: "6", nombre: "Habitante de calle", code: "habitanteCalle" },
  { id: "7", nombre: "Migrante", code: "migrante" },
]);

//ITEMS DE ETNIAS
const etnias = ref([
  { id: "0", nombre: "No aplica", code: "NA" },
  { id: "1", nombre: "Mestizo", code: "mestizo" },
  { id: "2", nombre: "Afrodescendiente", code: "afro" },
  { id: "3", nombre: "Indígena", code: "indigena" },
  { id: "4", nombre: "Palanquero", code: "palanquero" },
  { id: "5", nombre: "Raizal", code: "raizal" },
  { id: "6", nombre: "ROM", code: "rom" },
]);

//ITEMS DE nivel_estudios
const nivel_estudios = ref([
  { id: "0", nombre: "Ninguno", code: "NA" },
  { id: "1", nombre: "Primaria", code: "primaria" },
  { id: "2", nombre: "Secundaria", code: "secundaria" },
  { id: "3", nombre: "Tecnico", code: "tecnico" },
  { id: "4", nombre: "Tecnologico", code: "tecnologico" },
  { id: "5", nombre: "Universitario", code: "universitario" },
  { id: "6", nombre: "Postgrado", code: "postgrado" },
]);

//ITEMS DEL TIPO DE Servicios
// const tipoServ = ref([
//   {
//     id: "0",
//     nombre: "Uso adecuado de redes sociales",
//     code: "Uso redes sociales",
//   },
//   { id: "1", nombre: "Marketing digital", code: "Marketing digital" },
//   { id: "2", nombre: "Ofimática", code: "Ofimatica" },
// ]);

//step activo
const active = ref(0);
//validado
const isValidate = ref(false);
//abrir modal
const visible = ref(false);
//SABER SI SE ACTIVA EL INPUT DE OTROS
const IsNewGenero = ref(false);

watch(IsNewGenero, (value) => {
  if (value) {
    form.genero = "";
  }
});

//STEP PART
//prev
const prevStep = (num) => {
  active.value = num;
};
//next
const nextStep = (num) => {

  isValidate.value = false;
  switch (num) {
    case 1:
      if (
        form.nombres &&
        form.apellidos &&
        form.edad &&
        form.telefono &&
        form.comuna &&
        form.sector
      ) {
        isValidate.value = true;
      }
      break;

    default:
      break;
  }

  if (isValidate.value) {
    active.value = num;
  } else {
    if (!form.nombres) {
      form.errors.nombres = "Este campo es requerido.";
    }

    if (!form.apellidos) {
      form.errors.apellidos = "Este campo es requerido.";
    }
    if (!form.edad) {
      form.errors.edad = "Este campo es requerido.";
    }

    if (!form.comuna) {
      form.errors.comuna = "Este campo es requerido.";
    }
    if (!form.sector) {
      form.errors.sector = "Este campo es requerido.";
    }
    if (!form.telefono) {
      form.errors.telefono = "Este campo es requerido.";
    }
  }
};
//play button
const playInfo = () => {
  isFirstTime.value = false;
  const audio = infoAudio.value;
  audio.play();
  usePage().props.accesibilidad.audio = true;
};

//activar/desactivar sonido
const handleAudio = (num) => {
  isFirstTime.value = false;
  if (num == 0) {
    usePage().props.accesibilidad.audio = true;
  } else if (num == 1) {
    usePage().props.accesibilidad.audio = false;
  }
};

const closeModal = () => {
  visible.value = false;
  window.location.reload();
};


const submit = async () => {
  try {
    // Ejecuta reCAPTCHA y obtiene el token
    const recaptchaToken = await executeRecaptcha("register");


    // Agrega el token al formulario
    form.recaptcha_token = recaptchaToken;



    console.log(form);


    // Envía el formulario
     form.post(route("registro"), {
    onSuccess: () => {
      swal
        .fire({
          title: "Registro exitoso",
          text: "Tu registro se ha completado correctamente.",
          icon: "success",
          confirmButtonText: "OK",
        })
        .then(() => {
          router.visit(route("welcome")); // Redirige al login
        });
    },

    onError: () => {

      swal.fire({
        title: "Error en el registro",
        text: "Algo salió mal en el registro. Por favor, revisa los campos o inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });
  } catch (error) {
    console.log(error);

    swal.fire({
      title: "Error de reCAPTCHA",
      text: "Hubo un problema al validar reCAPTCHA. Por favor, inténtalo nuevamente.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};


</script>
