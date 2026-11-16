<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Configuración de Inicio</h2>
          <p class="text-sm text-gray-500 mt-1">Personaliza los textos, imágenes y enlaces de la página principal (Welcome)</p>
        </div>
        <div class="flex items-center gap-2">
          <a
            :href="route('welcome')"
            target="_blank"
            class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors border border-gray-300 shadow-sm"
          >
            <ArrowTopRightOnSquareIcon class="w-4 h-4 mr-1.5" />
            Ver Página Pública
          </a>
          <button
            type="button"
            @click="confirmReset"
            class="inline-flex items-center px-4 py-2 bg-white hover:bg-red-50 text-red-600 hover:text-red-700 text-sm font-semibold rounded-lg transition-colors border border-red-200 shadow-sm"
          >
            <ArrowPathIcon class="w-4 h-4 mr-1.5" />
            Restablecer Defaults
          </button>
        </div>
      </div>
    </template>

    <div class="py-6">
      <form @submit.prevent="submit" class="max-w-6xl mx-auto space-y-8">
        
        <!-- ========================================== -->
        <!-- SECCIÓN 2: DESTACADA / EVENTO (PRIORIDAD)   -->
        <!-- ========================================== -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden">
          <div class="px-6 py-5 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-200/80 flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F57C00] to-[#D32F2F] text-white flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-800">Sección 2: Evento Destacado / CTA</h3>
                <p class="text-xs text-gray-500">Configura la imagen principal del evento, textos promocionales y botones de acción</p>
              </div>
            </div>

            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="form.seccion2_mostrar" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              <span class="ml-3 text-xs font-bold text-gray-700">Mostrar esta sección</span>
            </label>
          </div>

          <div class="p-6 sm:p-8 space-y-6" :class="{ 'opacity-50 pointer-events-none': !form.seccion2_mostrar }">
            
            <!-- Imagen de la Sección 2 + Previsualización -->
            <div>
              <InputLabel value="Imagen Principal de la Sección 2" class="text-sm font-bold text-gray-700 mb-2" />
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <!-- Preview Mockup -->
                <div class="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 aspect-[4/3] flex items-center justify-center group">
                  <img
                    :src="seccion2PreviewUrl || form.seccion2_imagen"
                    alt="Previsualización Sección 2"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div class="absolute bottom-4 left-4">
                    <span class="inline-block px-3 py-1 bg-[#FFC107] text-black text-xs font-bold rounded-full shadow-md">
                      {{ form.seccion2_badge || '#TuEvento' }}
                    </span>
                  </div>

                  <span class="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-black/60 text-white rounded backdrop-blur-sm">
                    Vista previa
                  </span>
                </div>

                <!-- Input Subida de Imagen -->
                <div class="space-y-4">
                  <div class="border-2 border-dashed border-gray-300 hover:border-amber-400 rounded-2xl p-6 text-center transition-colors bg-gray-50/50">
                    <PhotoIcon class="w-12 h-12 mx-auto text-amber-500 mb-2" />
                    <p class="text-sm font-semibold text-gray-700 mb-1">
                      Haz clic para subir una nueva imagen
                    </p>
                    <p class="text-xs text-gray-500 mb-4">Formatos recomendados: WEBP, JPG, PNG (hasta 10MB)</p>
                    
                    <input
                      type="file"
                      ref="seccion2FileInput"
                      @change="handleSeccion2FileChange"
                      accept="image/*"
                      class="hidden"
                    />
                    
                    <button
                      type="button"
                      @click="$refs.seccion2FileInput.click()"
                      class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                    >
                      <ArrowUpTrayIcon class="w-4 h-4 mr-1.5" />
                      Seleccionar Archivo
                    </button>

                    <p v-if="seccion2FileName" class="text-xs font-semibold text-emerald-600 mt-3 flex items-center justify-center gap-1">
                      <span>✓ Archivo seleccionado:</span>
                      <span class="truncate max-w-xs">{{ seccion2FileName }}</span>
                    </p>
                  </div>

                  <div>
                    <InputLabel for="seccion2_imagen_url" value="O ingresar ruta / URL directa de la imagen" class="text-xs text-gray-500" />
                    <TextInput
                      id="seccion2_imagen_url"
                      type="text"
                      v-model="form.seccion2_imagen"
                      placeholder="Ej: /assets/img/mujerValiente.webp o https://..."
                      class="mt-1 block w-full text-xs font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="h-px bg-gray-200"></div>

            <!-- Campos de texto de la Sección 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <InputLabel for="seccion2_badge" value="Badge / Hashtag sobre la imagen" />
                <TextInput
                  id="seccion2_badge"
                  type="text"
                  v-model="form.seccion2_badge"
                  placeholder="#MujerValiente6K"
                  class="mt-1 block w-full text-sm"
                />
              </div>

              <div>
                <InputLabel for="seccion2_titulo" value="Título Inicial" />
                <TextInput
                  id="seccion2_titulo"
                  type="text"
                  v-model="form.seccion2_titulo"
                  placeholder="¿Participaste en la"
                  class="mt-1 block w-full text-sm"
                />
              </div>

              <div>
                <InputLabel for="seccion2_titulo_resaltado" value="Título Resaltado (Gradiente Naranja/Rojo)" />
                <TextInput
                  id="seccion2_titulo_resaltado"
                  type="text"
                  v-model="form.seccion2_titulo_resaltado"
                  placeholder="Mujer Valiente 6K"
                  class="mt-1 block w-full text-sm font-semibold text-amber-600"
                />
              </div>

              <div class="md:col-span-2">
                <InputLabel for="seccion2_descripcion" value="Párrafo Descriptivo" />
                <textarea
                  id="seccion2_descripcion"
                  v-model="form.seccion2_descripcion"
                  rows="3"
                  class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                  placeholder="Descripción del evento..."
                ></textarea>
              </div>
            </div>

            <div class="h-px bg-gray-200"></div>

            <!-- Botones de la Sección 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Botón 1 -->
              <div class="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                <p class="text-xs font-bold uppercase tracking-wider text-gray-600">Botón 1 (Principal)</p>
                <div>
                  <InputLabel for="seccion2_boton1_texto" value="Texto del botón" class="text-xs" />
                  <TextInput
                    id="seccion2_boton1_texto"
                    type="text"
                    v-model="form.seccion2_boton1_texto"
                    class="mt-1 block w-full text-xs"
                  />
                </div>
                <div>
                  <InputLabel for="seccion2_boton1_url" value="Enlace / Destino (ej: #inicio)" class="text-xs" />
                  <TextInput
                    id="seccion2_boton1_url"
                    type="text"
                    v-model="form.seccion2_boton1_url"
                    class="mt-1 block w-full text-xs font-mono"
                  />
                </div>
              </div>

              <!-- Botón 2 -->
              <div class="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                <p class="text-xs font-bold uppercase tracking-wider text-gray-600">Botón 2 (Secundario)</p>
                <div>
                  <InputLabel for="seccion2_boton2_texto" value="Texto del botón" class="text-xs" />
                  <TextInput
                    id="seccion2_boton2_texto"
                    type="text"
                    v-model="form.seccion2_boton2_texto"
                    class="mt-1 block w-full text-xs"
                  />
                </div>
                <div>
                  <InputLabel for="seccion2_boton2_url" value="Enlace / Destino (ej: https://...)" class="text-xs" />
                  <TextInput
                    id="seccion2_boton2_url"
                    type="text"
                    v-model="form.seccion2_boton2_url"
                    class="mt-1 block w-full text-xs font-mono"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        <!-- ========================================== -->
        <!-- SECCIÓN 1: HERO / CABECERA PRINCIPAL       -->
        <!-- ========================================== -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden">
          <div class="px-6 py-5 bg-gradient-to-r from-gray-50 to-slate-100 border-b border-gray-200/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gray-800 text-white flex items-center justify-center font-bold shadow-md">
              1
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-800">Sección 1: Cabecera Hero (Búsqueda por Dorsal)</h3>
              <p class="text-xs text-gray-500">Configura los títulos, subtítulos, lema y fondo de la cabecera</p>
            </div>
          </div>

          <div class="p-6 sm:p-8 space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <InputLabel for="hero_badge" value="Badge Superior" />
                <TextInput
                  id="hero_badge"
                  type="text"
                  v-model="form.hero_badge"
                  placeholder="Plataforma Oficial"
                  class="mt-1 block w-full text-sm"
                />
              </div>

              <div>
                <InputLabel for="hero_titulo" value="Título Principal" />
                <TextInput
                  id="hero_titulo"
                  type="text"
                  v-model="form.hero_titulo"
                  placeholder="CONSULTA TUS FOTOS"
                  class="mt-1 block w-full text-sm font-extrabold"
                />
              </div>

              <div>
                <InputLabel for="hero_subtitulo" value="Subtítulo" />
                <TextInput
                  id="hero_subtitulo"
                  type="text"
                  v-model="form.hero_subtitulo"
                  placeholder="POR DORSAL"
                  class="mt-1 block w-full text-sm font-bold"
                />
              </div>

              <div>
                <InputLabel for="hero_lema" value="Lema Institucional (Pie del Hero)" />
                <TextInput
                  id="hero_lema"
                  type="text"
                  v-model="form.hero_lema"
                  placeholder="Pereira, una ciudad que avanza"
                  class="mt-1 block w-full text-sm italic"
                />
              </div>

              <div class="md:col-span-2">
                <InputLabel for="hero_descripcion" value="Descripción del Hero" />
                <textarea
                  id="hero_descripcion"
                  v-model="form.hero_descripcion"
                  rows="2"
                  class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                  placeholder="Encuentra, descarga y comparte tus fotografías oficiales del evento..."
                ></textarea>
              </div>
            </div>

            <!-- Fondo del Hero -->
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <InputLabel value="Imagen de Fondo del Hero" class="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2" />
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <div class="w-full sm:w-48 h-24 rounded-lg overflow-hidden bg-gray-900 border border-gray-300 relative flex-shrink-0">
                  <img
                    :src="heroPreviewUrl || form.hero_imagen"
                    alt="Fondo Hero"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div class="flex-1 w-full space-y-2">
                  <div class="flex items-center gap-2">
                    <input
                      type="file"
                      ref="heroFileInput"
                      @change="handleHeroFileChange"
                      accept="image/*"
                      class="hidden"
                    />
                    <button
                      type="button"
                      @click="$refs.heroFileInput.click()"
                      class="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Cambiar Imagen de Fondo
                    </button>
                    <span v-if="heroFileName" class="text-xs text-emerald-600 font-semibold truncate">{{ heroFileName }}</span>
                  </div>
                  <TextInput
                    type="text"
                    v-model="form.hero_imagen"
                    placeholder="Ruta: /assets/img/fondo.webp"
                    class="block w-full text-xs font-mono"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Barra inferior de acciones fijada -->
        <div class="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200 flex items-center justify-between gap-4">
          <p class="text-xs text-gray-500 hidden sm:block">
            Los cambios se reflejarán de inmediato en la página principal <strong>Welcome</strong>.
          </p>

          <div class="flex items-center gap-3 ml-auto">
            <PrimaryButton
              type="submit"
              :disabled="form.processing"
              class="px-6 py-3 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] hover:from-[#FF9800] hover:to-[#E53935] text-white font-extrabold text-sm rounded-xl shadow-lg"
            >
              <CheckIcon class="w-5 h-5 mr-1.5" />
              {{ form.processing ? 'Guardando...' : 'Guardar Configuración' }}
            </PrimaryButton>
          </div>
        </div>

      </form>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useForm, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import {
  PhotoIcon,
  ArrowUpTrayIcon,
  CheckIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline';

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});

const form = useForm({
  // Sección 2
  seccion2_mostrar: props.config.seccion2_mostrar ?? true,
  seccion2_imagen: props.config.seccion2_imagen || '',
  seccion2_imagen_file: null,
  seccion2_badge: props.config.seccion2_badge || '',
  seccion2_titulo: props.config.seccion2_titulo || '',
  seccion2_titulo_resaltado: props.config.seccion2_titulo_resaltado || '',
  seccion2_descripcion: props.config.seccion2_descripcion || '',
  seccion2_boton1_texto: props.config.seccion2_boton1_texto || '',
  seccion2_boton1_url: props.config.seccion2_boton1_url || '',
  seccion2_boton2_texto: props.config.seccion2_boton2_texto || '',
  seccion2_boton2_url: props.config.seccion2_boton2_url || '',

  // Sección 1 (Hero)
  hero_badge: props.config.hero_badge || '',
  hero_titulo: props.config.hero_titulo || '',
  hero_subtitulo: props.config.hero_subtitulo || '',
  hero_descripcion: props.config.hero_descripcion || '',
  hero_lema: props.config.hero_lema || '',
  hero_imagen: props.config.hero_imagen || '',
  hero_imagen_file: null,
});

const seccion2PreviewUrl = ref(null);
const seccion2FileName = ref('');

const handleSeccion2FileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  form.seccion2_imagen_file = file;
  seccion2FileName.value = file.name;
  seccion2PreviewUrl.value = URL.createObjectURL(file);
};

const heroPreviewUrl = ref(null);
const heroFileName = ref('');

const handleHeroFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  form.hero_imagen_file = file;
  heroFileName.value = file.name;
  heroPreviewUrl.value = URL.createObjectURL(file);
};

const submit = () => {
  form.post(route('welcome-config.update'), {
    preserveScroll: true,
    forceFormData: true,
  });
};

const confirmReset = () => {
  if (confirm('¿Estás seguro de restablecer toda la configuración del Welcome a sus valores por defecto?')) {
    router.post(route('welcome-config.reset'), {}, {
      preserveScroll: true,
    });
  }
};
</script>

