#from django.contrib import admin
from django.urls import path, include
from alarm_iot.arduino import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('sensores/', views.sensores_data_view, name='sensores'),
]
